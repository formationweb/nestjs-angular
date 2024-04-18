import { map, of } from 'rxjs';

/*
function watchDirectory(path) {
  return new Observable((subscriber) => {
    watch(path, (eventType, filename) => {
      subscriber.next({
        eventType,
        filename
      })
    });
  });
}

const directory$ = watchDirectory('./dir');

directory$.subscribe((event) => {
    console.log(event)
})
*/

/// ---

// Si les valeurs sont supérieurs à 3, on a une erreur. On doit la réceptionner dans l'observer
// pensez à importer of
const data$ = of(1, 2, 3, 4, 5)
    .pipe(
        map((nb) => {
            if (nb > 3) {
                throw new Error('supérieur à 3 !')
            }
            return nb
        })
    )


data$.subscribe({
    next: nb => console.log(nb),
    error: err => console.log(err)
})
