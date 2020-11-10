// Exercício 1:
let n = 5;
let draw = "";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        draw += "*";
    }
    console.log(draw);
    draw = "";
}


// Exercício 2:
n = 5;
draw = "";
for (i = 1; i <= n; i++) {
    draw += "*";
    console.log(draw);
}


// Exercício 3:
n = 5;
draw = "";
let j, k;
for (i = 0; i < n; i++) {
    for (j = n; j > 1 + i; j--) {
        draw += " ";
    }
    for (k = 0; k <= i; k++) {
        draw += "*";
    }
    console.log(draw);
    draw = "";
}


// Exercício 4:
n = 5;
draw = "";
let j, k;
for (i = 0; i < (n + 1)/ 2; i++) {
    for (j = n; j > n / 2 + i; j--) {
        draw += " ";
    }
    for (k = 0; k <= i + i; k++) {
        draw += "*";
    }
    console.log(draw);
    draw = "";
}