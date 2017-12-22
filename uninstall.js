/**
 * 删除复制的脚本
 */
const fs = require('fs');
const path = require('path');

let gitPath = path.resolve(__dirname, '../../.git/hooks/');
if (!fs.existsSync(gitPath)) {
    fs.mkdirSync(gitPath);
}
fs.renameSync(gitPath + '/pre-commit',gitPath + '/pre-commit.old')
fs.renameSync(gitPath + '/post-commit',gitPath + '/post-commit.old')
