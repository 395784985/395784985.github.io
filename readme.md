## vitepress 搭建 github pages 主页

### 1、创建vitepress项目

创建项目目录 home-adong，进入目录
```
npm i pnpm -g # 安装pnpm
pnpm add -D vitepress # 添加模块
pnpm vitepress init # 初始项目
pnpm run docs:dev #运行项目
```

### 2、创建github 仓库

创建与github用户名相同的仓库，然后通过username.github.io访问

### 3、推送到github仓库

新项目
```
echo "# 395784985" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/395784985/395784985.git
git push -u origin main
```
老项目
```
git remote add origin https://github.com/395784985/395784985.git
git branch -M main
git push -u origin main
```

### 4、github pages 设置

deploy.yml设置
```
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8

      - name: Install dependencies
        run: pnpm install

      - name: Build VitePress
        run: pnpm docs:build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vitepress/dist
          keep_files: false

```

选择 Actions>>>General

在"工作流权限(Workflow permissions)"中，选择 Read and write permissions

### 5、参考连接

https://www.jianshu.com/p/635c3ef1364a
https://blog.csdn.net/2401_86574164/article/details/143261337


### 6、报错

```
GitHub Action: The process ‘/usr/bin/git‘ failed with exit code 128
```

- 原因分析：
默认情况下，新存储库没有适当的工作流权限。

- 解决方案：
转到存储库 Setting

选择 Actions>>>General

在"工作流权限(Workflow permissions)"中，选择 Read and write permissions