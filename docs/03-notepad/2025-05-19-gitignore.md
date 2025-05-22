1、活动、报名之间的关系？
2、报名审核？
3、满意度调查问卷发布，与活动有没有关系？
4、数据库备份，一件备份
5、数据库维护，数据库管理工具

6、服务器需要怎么部署？docker，windows

使用外国人填写方式，日期格式

#.gitignore使用

##排除语法
```
subfolder/  # 排除根目录下的 subfolder 文件夹及其所有内容
**/temp/  # 排除所有层级中的 temp 文件夹（如 /a/temp/, /b/c/temp/）
*.log/      # 排除所有以 .log 结尾的文件夹（如 error.log/）
*/backup/   # 排除所有直接子目录中的 backup 文件夹
subfolder/*    # 排除 subfolder 下的所有文件和子文件夹
##高级用法
!subfolder/.   # 保留空文件夹（需 Git 2.16+）
**/logs/       # 排除所有 logs 文件夹
!project/logs/ # 保留 project/logs/ 文件夹（但其中的文件仍可能被其他规则排除）
src/components/**/*.test.js  # 排除 src/components/ 下所有 .test.js 文件
docs/**/*.md                # 排除 docs/ 及其子目录中的所有 Markdown 文件
```
## 命令使用
```
git status --ignored # 查看被忽略的文件列表

若文件夹已被 Git 跟踪，需先清除缓存再应用新规则：
git rm -r --cached subfolder/  # 删除缓存但保留本地文件 
git commit -m "Stop tracking subfolder"

# 在 project/ 子目录中创建 .gitignore
echo "temp/" > project/.gitignore  # 仅忽略 project/temp/
```
## 示例
```
my-project/
├── src/
│   ├── utils/
│   └── components/
│       └── __tests__/
├── docs/
│   └── build/
└── logs/
```
.gitignore
```
# 排除所有 logs 文件夹（包括根目录下的）
logs/

# 排除 src/components/ 下的测试文件，但保留其他文件
src/components/**/*.test.js

# 排除 docs/build/ 及其内容
docs/build/

# 保留 src/utils/ 下的配置文件
!src/utils/*.config.js
```

## git提交流程
简易的命令行入门教程:
Git 全局设置:
```
git config --global user.name "赵旭东"
git config --global user.email "395784985@qq.com"
```
创建 git 仓库:
```
mkdir bazi
cd bazi
git init 
touch README.md
git add README.md
git commit -m "first commit"
git remote add origin https://gitee.com/system/bazi.git
git push -u origin "master"
```
已有仓库?
```
cd existing_git_repo
git remote add origin https://gitee.com/system/bazi.git
git push -u origin "master"
```