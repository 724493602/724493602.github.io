#!/usr/bin/env sh

# 忽略错误
set -e  #有错误抛出错误

rm -rf ../docs
# 构建
npm run docs:build  #然后执行打包命令

