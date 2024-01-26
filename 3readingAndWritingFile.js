const fs = require('fs');

// Reading File
// Asynchronous Vesrion
fs.readFile('fileForRead.txt', 'utf-8', (err, data) => {
    console.log('Asynchronous Version : ',data);
})

// Synchronous Version
const fileData = fs.readFileSync('fileForRead.txt', 'utf-8');
console.log('Synchronous Version ', fileData);

//Writing File
// Asynchronous File
const data = 'this data i want to write in file'
fs.writeFile('fileForWrite', data, (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('File write successfully');
})
