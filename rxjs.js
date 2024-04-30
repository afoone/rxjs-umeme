const {of, Subject, Observable, scan} = require('rxjs')
const {observe} = require('rxjs-observe')

// const obs = of(1,2,3);
// obs.subscribe({
//     next: evt => console.log(evt),
//     error: err => console.error(err),
//     complete: () => console.log("he terminado")
// })

let a = {text :"hola mundo"}
let subject = new Subject(a);

const a$ = subject.pipe(
    scan((acc, curr) => {
        return{
            ...acc, 
            ...curr
        }
    }, a)
)

a$.subscribe(console.log)
