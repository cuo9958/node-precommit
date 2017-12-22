/**
 * 执行方法
 */
const package = require('../../../package.json');
const execSync = require('child_process').exec;
const path = require('path');

if (!package.precommit) process.exit(0);
let res = execSync(package.precommit, {
    cwd: path.resolve(__dirname, "../../../", )
})