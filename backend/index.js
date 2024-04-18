function rand() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('calcul terminé');
      const rand = Math.random();
      reject(new Error('test'));
    }, 1000);
  });
}

async function start() {
  try {
    const nb1 = await rand();
    const nb2 = await rand();
  } catch (err) {
    console.log(err);
  }
}

start();
