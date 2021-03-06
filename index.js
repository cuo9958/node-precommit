/**
 * 安装之后复制脚本到git钩子目录下
 */
const fs = require('fs');
const path = require('path');

let gitPath = path.resolve(__dirname, '../../.git/hooks/');
if (!fs.existsSync(gitPath)) {
    fs.mkdirSync(gitPath);
}

let preCommitFile = fs.readFileSync(path.resolve(__dirname, './lib/node-precommit.sh'));
fs.writeFileSync(gitPath + '/pre-commit', preCommitFile, {
    encoding: 'utf8',
    mode: 0o777
});
let CommitFile = fs.readFileSync(path.resolve(__dirname, './lib/node-post-commit.sh'));
fs.writeFileSync(gitPath + '/post-commit', CommitFile, {
    encoding: 'utf8',
    mode: 0o777
});