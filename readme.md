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


### 5、参考连接

https://www.jianshu.com/p/635c3ef1364a
https://blog.csdn.net/2401_86574164/article/details/143261337