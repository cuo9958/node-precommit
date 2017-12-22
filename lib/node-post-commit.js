/**
 * 执行方法
 */
const package = require('../../../package.json');
const execSync = require('child_process').exec;
const path = require('path');

if (!package.postcommit) process.exit(0);
execSync(package.postcommit, {
    cwd: path.resolve(__dirname, "../../../", )
})