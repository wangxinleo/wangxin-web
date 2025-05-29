import * as React from "react";

// 定义移动设备的屏幕宽度断点（通常为768px）
const MOBILE_BREAKPOINT = 768;

// 自定义 Hook：useIsMobile，用于检测当前窗口是否为移动设备尺寸
export function useIsMobile() {
  // 使用 useState 存储当前是否为移动设备的状态
  // 初始值为 undefined，表示尚未确定状态
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  // 使用 useEffect 在组件挂载后执行逻辑，并在组件卸载时清理副作用
  React.useEffect(() => {
    // 创建一个 MediaQueryList 对象，用于监听屏幕宽度是否小于设定的断点
    // 断点减1是为了精确匹配小于768px的情况
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    // 定义处理媒体查询变化的事件监听器
    const onChange = () => {
      // 根据当前窗口宽度是否小于断点来更新 isMobile 状态
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    // 添加事件监听器到 MediaQueryList 对象上，当媒体查询状态变化时调用 onChange 函数
    mql.addEventListener("change", onChange);

    // 组件挂载时立即执行一次检查，设置初始状态
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

    // 返回清理函数，在组件卸载时移除事件监听器，防止内存泄漏
    return () => mql.removeEventListener("change", onChange);
  }, []); // 空依赖数组表示此 effect 只在组件挂载和卸载时运行一次

  // 返回 isMobile 状态的布尔值形式（!!isMobile 将 undefined 转换为 false）
  return !!isMobile;
}
