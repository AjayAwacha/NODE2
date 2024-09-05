class MyCustomEventEmitter {
    constructor() {
        this.events = {};
    }

    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
    }

    emit(eventName, ...arg) {
        if (this.events[eventName]) {
            this.events[eventName].forEach((callbackFun) => {
                callbackFun(...arg);
            })
        }
    }
}

const instanceOfCustomEE = new MyCustomEventEmitter();
instanceOfCustomEE.on('myEvent', (...arg) => {
    console.log(`this is callback of myEvent and its arguments are ${arg.join(' ')}`)
});
instanceOfCustomEE.emit('myEvent', 10, 20, 30, 40, 50, 60);
instanceOfCustomEE.emit('myEvent', 1, 2, 3, 4, 5, 6);

