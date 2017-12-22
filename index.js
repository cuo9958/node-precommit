/**
 * 安装之后复制脚本到git钩子目录下
 */
const fs = require('fs');
const path = require('path');

let gitPath = path.resolve(__dirname, '../../../.git/hooks/');
if (!fs.existsSync(gitPath)) {
    fs.mkdirSync(gitPath);
}

let preCommitFile = fs.readFileSync(path.resolve(__dirname, '../lib/node-precommit.sh'));
fs.writeFileSync(gitPath + '/node-precommit.sh', preCommitFile, {
    encoding: 'utf8',
    mode: 0o777
});