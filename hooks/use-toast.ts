"use client";

// 灵感来源于 react-hot-toast 库
import * as React from "react";

import type {
  ToastActionElement, // 导入 Toast 操作元素的类型
  ToastProps, // 导入 Toast 组件的属性类型
} from "@/components/ui/toast"; // 从 UI 组件库导入 Toast 相关的类型

// 定义同时显示的 Toast 数量限制
const TOAST_LIMIT = 1;
// 定义 Toast 自动移除前的延迟时间 (这里设置了一个很大的值，实际上可能是通过用户交互或组件内部逻辑移除)
const TOAST_REMOVE_DELAY = 1000000;

// 定义 ToasterToast 类型，继承 ToastProps 并添加 id、title、description 和 action 属性
type ToasterToast = ToastProps & {
  id: string; // 唯一的 Toast 标识符
  title?: React.ReactNode; // Toast 标题，可以是 React 节点
  description?: React.ReactNode; // Toast 描述，可以是 React 节点
  action?: ToastActionElement; // Toast 操作按钮元素
};

// 定义可能的 action 类型常量
const actionTypes = {
  ADD_TOAST: "ADD_TOAST", // 添加 Toast
  UPDATE_TOAST: "UPDATE_TOAST", // 更新现有 Toast
  DISMISS_TOAST: "DISMISS_TOAST", // 标记 Toast 为即将关闭状态
  REMOVE_TOAST: "REMOVE_TOAST", // 从状态中完全移除 Toast
} as const; // 使用 as const 断言为只读类型

// 用于生成唯一 Toast ID 的计数器
let count = 0;

// 生成唯一 ID 的函数
function genId() {
  // 计数器加1，并使用取模运算防止超出最大安全整数
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString(); // 将计数器转换为字符串作为 ID
}

// 定义 ActionType 类型，使用 typeof actionTypes 获取 actionTypes 的所有值作为联合类型
type ActionType = typeof actionTypes;

// 定义可能的 Action 类型，这是一个联合类型
type Action =
  | { // 添加 Toast 的 Action
    type: ActionType["ADD_TOAST"];
    toast: ToasterToast;
  }
  | { // 更新 Toast 的 Action
    type: ActionType["UPDATE_TOAST"];
    toast: Partial<ToasterToast>; // 部分更新，只需要提供需要改变的属性
  }
  | { // 标记 Toast 关闭的 Action
    type: ActionType["DISMISS_TOAST"];
    toastId?: ToasterToast["id"]; // 要关闭的 Toast ID，如果 undefined 则关闭所有 Toast
  }
  | { // 移除 Toast 的 Action
    type: ActionType["REMOVE_TOAST"];
    toastId?: ToasterToast["id"]; // 要移除的 Toast ID，如果 undefined 则移除所有 Toast
  };

// 定义状态接口
interface State {
  toasts: ToasterToast[]; // Toast 列表
}

// 使用 Map 存储 Toast ID 到其对应的移除定时器 ID
const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

// 将 Toast 添加到移除队列的函数
const addToRemoveQueue = (toastId: string) => {
  // 如果该 Toast ID 已经在队列中，则不再添加
  if (toastTimeouts.has(toastId)) {
    return;
  }

  // 设置一个定时器，在指定延迟后执行移除 Toast 的操作
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId); // 从 Map 中移除定时器 ID
    dispatch({
      type: "REMOVE_TOAST", // 派发 REMOVE_TOAST Action
      toastId: toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout); // 将定时器 ID 存储到 Map 中
};

// Reducer 函数，根据当前状态和 Action 计算新的状态
export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST": // 处理添加 Toast Action
      return {
        ...state, // 展开当前状态
        // 将新 Toast 添加到列表开头，并使用 slice 限制 Toast 数量
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case "UPDATE_TOAST": // 处理更新 Toast Action
      return {
        ...state, // 展开当前状态
        // 遍历 Toast 列表，找到要更新的 Toast，使用新属性覆盖旧属性
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      };

    case "DISMISS_TOAST": { // 处理标记 Toast 关闭 Action
      const { toastId } = action;

      // ! 附带效应 ! - 这部分逻辑也可以提取到单独的 dismissToast() Action 中，但为了简单起见放在这里
      if (toastId) {
        // 如果指定了 toastId，则只将该 Toast 添加到移除队列
        addToRemoveQueue(toastId);
      } else {
        // 如果没有指定 toastId，则将所有当前显示的 Toast 添加到移除队列
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id);
        });
      }

      return {
        ...state, // 展开当前状态
        // 遍历 Toast 列表，将要关闭的 Toast 的 open 属性设置为 false
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
              ...t,
              open: false, // 设置 open 属性为 false，触发关闭动画
            }
            : t // 保留其他 Toast 不变
        ),
      };
    }
    case "REMOVE_TOAST": // 处理移除 Toast Action
      if (action.toastId === undefined) {
        return {
          ...state, // 展开当前状态
          toasts: [], // 如果没有指定 toastId，则清空 Toast 列表
        };
      }
      return {
        ...state, // 展开当前状态
        // 过滤掉要移除的 Toast
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
  }
};

// 监听器列表，用于存储订阅状态变化的函数
const listeners: Array<(state: State) => void> = [];

// 内存中的状态，初始化为空的 Toast 列表
let memoryState: State = { toasts: [] };

// 派发 Action 的函数，更新状态并通知所有监听器
function dispatch(action: Action) {
  memoryState = reducer(memoryState, action); // 使用 reducer 计算新状态
  listeners.forEach((listener) => {
    listener(memoryState); // 调用每个监听器，传递新状态
  });
}

// 定义 Toast 类型，Omit 表示从 ToasterToast 类型中省略 id 属性
type Toast = Omit<ToasterToast, "id">;

// 创建并显示 Toast 的函数
function toast({ ...props }: Toast) {
  const id = genId(); // 生成唯一的 Toast ID

  // 定义更新 Toast 的函数
  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id }, // 派发 UPDATE_TOAST Action，包含要更新的属性和 ID
    });
  // 定义关闭 Toast 的函数
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id }); // 派发 DISMISS_TOAST Action，指定要关闭的 Toast ID

  // 派发 ADD_TOAST Action，创建新的 Toast
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props, // 展开 Toast 属性
      id,
      open: true, // 默认设置 open 为 true，显示 Toast
      onOpenChange: (open) => {
        // 当 open 状态改变时触发的回调函数
        if (!open) dismiss(); // 如果 open 变为 false（用户关闭或动画结束），则调用 dismiss 函数
      },
    },
  });

  return {
    id: id, // 返回新创建 Toast 的 ID
    dismiss, // 返回关闭该 Toast 的函数
    update, // 返回更新该 Toast 的函数
  };
}

// 自定义 Hook：useToast，用于在组件中获取 Toast 状态和相关操作函数
function useToast() {
  // 使用 useState 订阅 memoryState 的变化
  const [state, setState] = React.useState<State>(memoryState);

  // 使用 useEffect 在组件挂载时添加监听器，并在组件卸载时移除监听器
  React.useEffect(() => {
    listeners.push(setState); // 将 setState 函数添加到监听器列表
    return () => {
      // 返回清理函数，在组件卸载时执行
      const index = listeners.indexOf(setState); // 找到当前 setState 函数在列表中的索引
      if (index > -1) {
        listeners.splice(index, 1); // 从监听器列表中移除该 setState 函数
      }
    };
  }, [state]); // 依赖 state，但通常这里应该是一个空的依赖数组 []，以确保只在挂载/卸载时运行

  // 返回当前 Toast 状态，以及创建和关闭 Toast 的函数
  return {
    ...state, // 展开当前 Toast 状态 (toasts 列表)
    toast, // 创建新 Toast 的函数
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }), // 关闭指定 Toast 的函数，如果未指定 ID 则关闭所有
  };
}

// 导出 useToast Hook 和 toast 函数
export { useToast, toast };
