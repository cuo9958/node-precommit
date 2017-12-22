# node-precommit
git提交之前使用运行一次package.json里的命令

## 使用方法

- 安装, `npm install --save node-precommit`
- `package.json`中添加命令,`precommit:"node update.js"`
- 每次提交的时候都会执行一次update.js
