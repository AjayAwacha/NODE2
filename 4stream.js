const fs = require('fs');

const createRedableStream = fs.createReadStream('largFile.txt', 'utf-8');

const createWritableStream = fs.createWriteStream('largFileWrite.txt')

createRedableStream.on('data', (chunk) => {
    console.log('Chunk Data Received', chunk);

    createWritableStream.write(chunk);
    console.log('**********************************************************');
})

createRedableStream.on('end', () => {
    console.log('File read Finish');

    createWritableStream.end(() => {
        console.log('Finish eritable stram to write');
    })
})

createRedableStream.on('error', (err) => {
    console.log('error occured in createRedableStream', err);
});

createWritableStream.on('error', (err) => {
    console.log('error occured in createWritableStream ', err);
})

