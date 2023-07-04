require('@babel/register');
const { taskFirst, taskNext } = require('./constants');

console.log(`${taskFirst()} ${taskNext()}`);

