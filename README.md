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

## 部署（Vercel + hypervapor.org）

### 1. 推送到 GitHub

```sh
pnpm run build          # 本地先验证构建
git add -A
git commit -m "update"
git push
```

### 2. 在 Vercel 导入项目

1. 打开 <https://vercel.com/new>，用 GitHub 登录。
2. 选择 `HYPERVAPOR/me` 仓库导入。
3. Framework 会自动识别为 Astro（若未识别，手动选 Astro）：
   - Build Command：`pnpm build`
   - Output Directory：`dist`
4. 点击 **Deploy**，稍等即可得到 `https://me.vercel.app`。

### 3. 绑定 hypervapor.org

域名在 Spaceship 购买，推荐**继续使用 Spaceship 的 DNS**（不要换 nameserver，
避免影响邮箱记录），只添加两条解析：

| 类型 | 主机 | 值 | 说明 |
|---|---|---|---|
| A | `@` | `76.76.21.21` | 裸域名指向 Vercel |
| CNAME | `www` | `cname.vercel-dns.com` | www 指向 Vercel |

操作路径：Spaceship 控制台 → 域名 → hypervapor.org → **Manage DNS** →
添加以上记录（保留已有的 MX / SPF / TXT 邮箱记录不动）。

然后在 Vercel：项目 → **Settings → Domains** → 添加 `hypervapor.org` 和
`www.hypervapor.org`。等 DNS 生效（几分钟到几小时）后，Vercel 会自动签发并
续期 HTTPS 证书。

> 注意：如果 `hypervapor.org` 之前指向别的网站，A 记录改动会让它切到 Vercel；
> 邮箱服务不受影响（MX 记录独立存在）。`src/consts.ts` 里的 `SITE.url` 已经是
> `https://hypervapor.org`，canonical / OpenGraph 无需再改。
