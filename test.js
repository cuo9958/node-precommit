//git log -1 HEAD
const execSync = require('child_process').execSync;
const path = require('path');

let res = execSync('git log -1 HEAD')
let git_log=res.toString();
console.log(git_log.indexOf('add'))