import { watch } from 'fs';

watch('./dir', (eventType, filename) => {
  console.log(eventType, filename)
});

// const directory$ = watchDirectory('./dir');

/// ---

// Si les valeurs sont supérieurs à 3, on a une erreur. On doit la réceptionner dans l'observer
const data$ = of(1, 2, 3, 4, 5);