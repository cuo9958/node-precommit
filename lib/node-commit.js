/**
 * 执行方法
 */
const package = require('../../../package.json');
const execSync = require('child_process').execSync;

if (!package.precommit) process.exit(0);
let res = execSync(package.commit, {
    cwd: path.resolve(__dirname, "../../../", )
})
console.log(res.toString())