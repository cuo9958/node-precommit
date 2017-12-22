# node-precommit
git提交之前使用运行一次package.json里的命令

## 使用方法

- 安装, `npm install --save node-precommit`
- `package.json`中添加命令,`precommit:"node check.js"`,提交之前检查文件
- `package.json`中添加命令,`commit:"node update.js"`,提交之后发布文件
