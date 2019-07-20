#!/bin/bash
echo "Hello World !"  #这是一条语句
docsite build
git pull
git add .
git commit -m "init"
git push
