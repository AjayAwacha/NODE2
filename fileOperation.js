
// custom event handler
// const EventEmitter = require('events');
// const myEvent = new EventEmitter();

// myEvent.on('l1', (data) => {
//     console.log('Listner 1 received data ', data);
// })
// myEvent.on('l2', (data) => {
//     console.log('Listner 2 received data ', data);
// })
// myEvent.on('l1', (data) => {
//     console.log('Listner 1 received data ', data);
// })
// myEvent.emit('l1', 'Ajay');
// myEvent.emit('l2', 'Ajay');

const MyCustomEvent = require('./customEventEmitter');
const myEvent = new MyCustomEvent();

myEvent.on('l1', (data) => {
    console.log('Listner 1 received data ', data);
})
myEvent.on('l2', (data) => {
    console.log('Listner 2 received data ', data);
})
myEvent.on('l1', (data) => {
    console.log('Listner 1 received data ', data);
})
myEvent.emit('l1', 'Ajay');
myEvent.emit('l2', 'Ajay');
