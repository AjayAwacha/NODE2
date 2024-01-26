// Promise if already resolved or resolve immediatlly
// set timeout if time is zero
// set immediate
// set timeout 2000
// file read write

const fs = require('fs');

console.log('Start');

setImmediate(() => {
    console.log('setImmediate execute');
});

setTimeout(() => {
    console.log('setTimeout1 execute');
}, 0);

Promise.resolve().then(() => {
    console.log('Promise resolved 1');
});

function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        console.log('Promise Resolve2');
        resolve()
    });
}
fetchDataPromise();


setTimeout(() => {
    console.log('setTimeout2 execute');
}, 2000);

fs.readFile('fileForRead.txt', 'utf-8', (err, data) => {
    console.log(data);
})

console.log('End');