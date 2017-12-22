/**
 * 执行方法
 */
const package = require('../../../package.json');
const execSync = require('child_process').exec;
const path = require('path');

if (!package.commit) process.exit(0);
execSync(package.commit, {
    cwd: path.resolve(__dirname, "../../../", )
})