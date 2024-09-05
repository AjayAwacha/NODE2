class MyCustomEvent {
    constructor() {
        this.myEvents = {};
    }

    on(eventName, callback) {
        if (!this.myEvents[eventName]) {
            this.myEvents[eventName] = [];
        }
        this.myEvents[eventName].push(callback);
    }

    emit(eventName, data) {
        this.myEvents[eventName].forEach((myCallback) => {
            myCallback(data);
        })
    }
}
module.exports = MyCustomEvent;