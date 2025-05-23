#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo '91fox.cn' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://peengtao123.github.io
git push -f git@github.com:peengtao123/peengtao123.github.io.git master

cd -
