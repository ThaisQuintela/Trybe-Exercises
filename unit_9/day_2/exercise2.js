const fetchPromise = () => {
  const promise = new Promise((resolve, reject) => {
    let numberArray = [];
    for (index = 0; index < 10; index += 1) {
      number = Math.pow(Math.floor(Math.random() * 51),2);
      numberArray.push(number);
    }
    const sum = numberArray.reduce((total, num) => total + num)
    if (sum < 8000) {
      return resolve();
    }
    reject();
  });

  promise
  .then(sum => [2, 3, 5, 10].map(number => sum / number))
  .then(numberArray => numberArray.reduce((total, num) => total + num))
  .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'))
}

fetchPromise();