# Personal Homepage

一个极简的静态个人主页：深色终端风，超大字号 Bio + 一排 icon 联系方式。技术栈为
Astro + Tailwind CSS + pnpm，视觉系统遵循项目根目录的 [`DESIGN.md`](./DESIGN.md)
（Dark Minimal Terminal 设计语言）。

## 技术栈

- [Astro](https://astro.build) — 静态站点生成
- [Tailwind CSS v4](https://tailwindcss.com) — 原子化样式
- [pnpm](https://pnpm.io) — 包管理器
- JetBrains Mono / IBM Plex Mono — Berkeley Mono 的开源替代字体

## 目录结构

```text
/
├── DESIGN.md                 # 设计系统源文件（深色极简终端风）
├── public/
├── src/
│   ├── layouts/              # BaseLayout
│   ├── pages/                # 页面路由
│   └── styles/global.css     # DESIGN.md → Tailwind 主题映射
└── package.json
```

## 命令

| 命令                   | 作用                              |
| :--------------------- | :-------------------------------- |
| `pnpm install`         | 安装依赖                          |
| `pnpm run dev`         | 本地开发 `localhost:4321`         |
| `pnpm run build`       | 构建生产站点到 `./dist/`          |
| `pnpm run preview`     | 本地预览构建结果                  |

## 待办

- [ ] 替换占位 Bio 与联系方式
- [ ] 部署（Vercel / Cloudflare Pages / GitHub Pages）
