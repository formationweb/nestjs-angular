import { BehaviorSubject } from 'rxjs'

// const ob$ = new Observable((subscriber) => {
//     subscriber.next(Math.random())
// })

const ob$ = new BehaviorSubject('fygfyefyuzefyzey')

ob$.subscribe(console.log)

ob$.next('d')



// ob$
//     .pipe(
//         bufferTime(400),
//         map(ev => ev.length)
//     )
//     .subscribe((nb) => {
//         console.log(nb)
//     })