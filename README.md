# sandman6z.github.io

Sandman 的个人主页与博客。Astro + TypeScript，中文、响应式，支持深浅主题与 Markdown 写作。

线上地址：https://sandman6z.github.io/

## 本地开发

安装 Node.js 26，在此目录执行：

```powershell
npm ci
npm run dev
```

打开终端显示的本地网址。检查和构建：

```powershell
npm run check
npm run build
npm run preview
```

## 内容维护

- `src/data/site.ts`：姓名、简介、邮件及社交链接。
- `src/pages/index.astro`、`about.astro`、`projects.astro`：首页、关于和项目。
- `src/content/posts/*.md`：Markdown 文章。
- `src/styles/global.css`：全站样式。

文章头部格式：

```yaml
---
title: "文章标题"
description: "一句话简介"
date: 2026-11-25
tags: [技术]
draft: false
---
```

文件名决定文章地址，如 `hello.md` 对应 `/blog/hello/`。未完成的文章可以使用 `draft: true`；《Clash 的操作》已设置为公开文章。

## 自动部署

提交到 main 分支后，`.github/workflows/deploy.yml` 会检查、构建并部署到 GitHub Pages。仓库 Pages 构建来源需选择 GitHub Actions。本配置面向根站点 `sandman6z.github.io`。

本项目统一了两代旧网站。历史文件、参考站和两份 Git 历史已另行离线备份；当前目录只维护新版源码，沿用原仓库 LICENSE。
