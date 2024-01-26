const myBuffer = Buffer.alloc(10);
myBuffer.write('Hello', 'utf-8');
const data = myBuffer.toString('utf-8');
console.log(data);