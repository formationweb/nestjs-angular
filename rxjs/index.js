
/*
const ob$ = of(1, 2, 3)
    .pipe(
        mergeMap(nb => of(nb * 2))
        // map(nb => nb * 2), c'est la simplification de la ligne ci-dessus
    )

ob$.subscribe(console.log)
*/

// let subscription

// interval(1000)
//     .subscribe((nb) => {
//         console.log('premier interval', nb)
//         if (subscription) subscription.unsubscribe()
//         subscription = interval(1000).subscribe((nb2) => {
//             console.log('---deuxième interval', nb2)
//         })
//     })

// interval(1000)
//         .pipe(
//             mergeMap((nb) => {
//                 console.log('premier interval', nb)
//                 return of(1)
//             })
//         )
//         .subscribe((nb2) => {
//             console.log('---deuxième interval', nb2)
//         })

// const ob$1 = interval(1000)
// const ob$2 = interval(2500).pipe(map(() => Math.random()))

// combineLatest([ ob$1, ob$2 ]).subscribe((val) => {
//     console.log(val)
// })