const EventEmitter = require('events');

const customEmitter = new EventEmitter();

const eventHandlerCallback = (data) => {
    console.log('Event Handler Handle Event ', data);
}

customEmitter.on('event-name', eventHandlerCallback);

customEmitter.emit('event-name', 'ASDF1234');