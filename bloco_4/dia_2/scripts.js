let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercício 1:
for (let key in numbers) {
    console.log(numbers[key]);
}

// Exercício 2:
let soma = 0;
for (key in numbers) {
    soma += numbers[key];
} console.log(soma);

// Exercício 3:
let media = soma / numbers.length;
console.log(media);

// Exercício 4:
if (media > 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}

// Exercício 5:
let maiorValor = 0;
for (key in numbers) {
    if (numbers[key] > maiorValor) {
        maiorValor = numbers[key];
    }
} console.log(maiorValor);

// Exercício 6:
let impar = 0;
for (key in numbers) {
    if (numbers[key] % 2 !== 0) {
        impar++;
    }
    if (impar === 0) {
        console.log("nenhum valor ímpar encontrado");
    }
} console.log(impar);

// Exercício 7:
let menorValor = 100;
for (key in numbers) {
    if (numbers[key] < menorValor) {
        menorValor = numbers[key];
    }
} console.log(menorValor);

// Exercício 8:
let newArray = [];
for (let index = 1; index <= 25; index++) {
    newArray.push(index);
} console.log(newArray);

// Exercício 9:
for (index = 0; index < 25; index++) {
    console.log(newArray[index] / 2);
}

// Bônus!
// Exercício 1:
for (let i = 1; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
        if (numbers[i] < numbers[j]) {
            let position = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = position;
        }
    }
} console.log(numbers);

// Exercício 2:
for (let k = 1; k < numbers.length; k++) {
    for (let l = 0; l < k; l++) {
        if (numbers[k] > numbers[l]) {
            position = numbers[k];
            numbers[k] = numbers[l];
            numbers[l] = position;
        }
    }
} console.log(numbers);

// Exercício 3:
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];

for (i = 0; i < numbers.length; i++) {
    if (i < numbers.length - 1) {
        newNumbers.push(numbers[i] * numbers[i + 1]);
    }
    else if (i == numbers.length - 1) {
        newNumbers.push(numbers[i] * 2);
    }
} console.log(newNumbers);