# wangxin-web

## 项目架构
```
/workspace/wangxin-web/
├── app/
│   ├── page.tsx         # 首页，导入并组合来自 components 的子组件
│   └── ... 其他页面 ...
├── components/
│   ├── ui/              # 基础 UI 组件 (来自 shadcn/ui)
│   ├── layout/          # 页面布局组件 (Header, Footer 等跨页面复用)
│   └── home/            # 首页特有的模块组件 (HeroSection, AboutSection, SkillsSection 等)
│   └── about/           # About 页面特有的模块组件 (如果需要)
│   └── ... 其他页面子文件夹 ...
│   └── shared/          # 其他通用的小型复用组件 (如果需要)
├── hooks/               # 自定义 hooks
└── ... 其他文件/目录 ...
```