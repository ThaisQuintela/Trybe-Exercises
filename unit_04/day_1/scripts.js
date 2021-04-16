// Exercício 1:
let a = 3;
let b = 7;

let soma = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let modulo = a % b;

console.log(`Soma: ${soma}\nSubtração: ${subtracao}\nMultiplicação: ${multiplicacao}\nDivisão: ${divisao}\nMódulo: ${modulo}`);


// Exercício 2:
let c = 10;
let d = 15;

if (c > d) {
    console.log("O valor c é maior.");
}
else if (c < d) {
    console.log("O valor d é maior.");
}
else {
    console.log("Os dois valores são iguais.");
}


// Exercício 3:
let e = 5;
let f = 10;
let g = 15;

if (e > f && e > g) {
    console.log("O valor e é maior.")
}
else if (f > e && f > g) {
    console.log("O valor f é maior.")
}
else if (g > f && g > e) {
    console.log("O valor g é maior.")
}
else {
    console.log("Há valores repetidos.");
}


// Exercício 4:
let h = 5;

if (h > 0) {
    console.log("Positive");
}
else if (h < 0) {
    console.log("Negative");
}
else {
    console.log("zero");
}


// Exercício 5:
let i = 90;
let j = 45;
let k = 45;

if (i + j + k === 180) {
    return true;
}
else {
    return false;
}


//Exercício 6:
let escolha = "RAINHA";
let peça = escolha.toLowerCase();

switch (peça) {
    case "rei":
        console.log("Anda 1 casa em qualquer direção.");
        break;
    case "rainha":
        console.log("Anda quantas casas quiser em qualquer direção.");
        break;
    case "bispo":
        console.log("Anda quantas casas quiser em diagonal.");
        break;
    case "cavalo":
        console.log("Anda em L para qualquer direção.");
        break;
    case "torre":
        console.log("Anda quantas casas quiser em linha reta;");
        break;
    case "pião":
        console.log("Anda 1 casa em frente e come em diagonal.");
        break;
    default:
        console.log("Peça inválida.")
}


// Exercício 7:
let nota = 100;

if (nota > 100 || nota < 0) {
    console.log("Erro");
} else if (nota >= 90) {
    console.log("A");
} else if (nota >= 80) {
    console.log("B");
} else if (nota >= 70) {
    console.log("C");
} else if (nota >= 60) {
    console.log("D");
} else if (nota >= 50) {
    console.log("E");
} else if (nota < 50 && nota >= 0) {
    console.log("F");
}


// Exercício 8:
let l = 5;
let m = 7;
let n = 8;

if (l % 2 === 0 || m % 2 === 0 || n % 2 === 0 ) {
    console.log(true);
} else {
    console.log(false);
}


//Exercício 9:
let o = 4;
let p = 6;
let q = 8;

if (o % 2 !== 0 || p % 2 !== 0 || q % 2 !== 0 ) {
    console.log(true);
} else {
    console.log(false);
}


// Exercício 10:
let custo = 100;
let valor = 150;

let lucro = (valor - custo * 1.2) * 1000;

if (custo < 0 || valor < 0) {
    console.log("Erro!");
}
console.log(lucro);


// Exercício 11:
let salarioBruto = 3500.00;
let salario = 0;
let salarioLiquido = 0;
//INSS
if (salarioBruto <= 1556.94) {
    salario = salarioBruto * 0.92;
}
else if (salarioBruto <= 2594.92) {
    salario = salarioBruto * 0.91;
}
else if (salarioBruto <= 5189.82) {
    salario = salarioBruto * 0.89;
}
else if (salarioBruto > 5189.82) {
    salario = salarioBruto - 570.88;
}
//IR
if (salario <= 1903.98) {
    salarioLiquido = salario;
}
else if (salario <= 2826.65) {
    salarioLiquido = salario - ((salario * 0.075) - 142.80);
}
else if (salario <= 3751.05) {
    salarioLiquido = salario - ((salario * 0.15) - 354.80);
}
else if (salario <= 4664,68) {
    salarioLiquido = salario - ((salario * 0.225) - 636.13);
}
else if (salario > 4664.68) {
    salarioLiquido = salario - ((salario * 0.275) - 869.36);
}
//Trybe
const salarioFinal = salarioLiquido - (salarioBruto*0.17);

console.log(salarioFinal);