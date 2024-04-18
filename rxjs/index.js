import { Observable } from 'rxjs'

const ob$ = new Observable((subscriber) => {
    subscriber.next(1)
    //subscriber.error(new Error('Erreur'))
    subscriber.next(2)
    subscriber.complete()
})

ob$.subscribe({
    next: (nb) => {
        console.log(nb)
    },
    error: (err) => {
        console.log(err)
    },
    complete: () => {
        console.log('finish')
    }
})

// ob$
//     .pipe(
//         bufferTime(400),
//         map(ev => ev.length)
//     )
//     .subscribe((nb) => {
//         console.log(nb)
//     })