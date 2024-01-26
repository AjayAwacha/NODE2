const fs = require('fs').promises;

async function promiseBasedMethod() {
    const dataFromFile1 = await fs.readFile(`${__dirname}/fileForRead.txt`, 'utf-8');
    console.log('dataFromFile1 ', dataFromFile1);
}
promiseBasedMethod();

console.log('current directory is ', __dirname);