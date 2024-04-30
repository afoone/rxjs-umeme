class Subject {
    constructor() {
        this.observers = []
    }

    // subscripcion de un nuevo observador 

    add(obs) {
        this.observers = this.observers.concat(obs)
    }

    delete(obs) {
        this.observers = this.observers.filter(l => l!== obs)
    }

    notifiy(evt) {
        this.observers.forEach(obs => obs.update(evt))
    }
}

const observer1 = {
    update: evt => console.log(evt)
}

const observer2 = {
    update: evt => console.log(evt)
}

const subject = new Subject()
subject.add(observer1)
subject.add(observer2)

subject.notifiy("hola mundo")