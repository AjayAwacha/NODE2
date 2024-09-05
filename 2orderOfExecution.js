// Promise if already resolved or resolve immediatlly
// set timeout if time is zero
// set immediate
// set timeout 2000
// file read write

const fs = require('fs');

console.log('Start'); // 1

setImmediate(() => {
    console.log('setImmediate execute');  // 9
});

setTimeout(() => {
    console.log('setTimeout1 execute');  // 8
}, 0);

Promise.resolve().then(() => {
    console.log('Promise resolved 1');  // 6
});

function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        console.log('Promise Resolve2');  // 2
        resolve('Resolved Data');
        console.log('Text After resolve');  // 3
    });
}
const promise = fetchDataPromise();
promise.then((data) => {
    console.log('Promise data ', data);  // 7
})


setTimeout(() => {
    console.log('setTimeout2 execute'); // 10
}, 2000);

fs.readFile('fileForRead.txt', 'utf-8', (err, data) => {
    console.log(data);   // 11
})

process.nextTick(() => {
    console.log('next Tick callback');  // 5
});

console.log('End');  // 4