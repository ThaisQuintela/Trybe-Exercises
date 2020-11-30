Exercício 1:
```
div {
  align-items: center;
  display: flex;
  flex-direction: column;
}

h1 {
  line-height: 50px;
  margin: 0;
  text-align: center;
}

.first {
  background-color: #ff0000;
  width: 100px;
}

.second {
  background-color: #ffa500;
  width: 200px;
}

.third {
  background-color: #ffff00;
  order: 1;
  width: 300px;
}

.fourth {
  background-color: #008000;
  order: 2;
  width: 400px;
}

.fifth {
  background-color: #0000ff;
  order: 3;
  width: 500px;
}

.sixth {
  background-color: #4b0082;
  order: 4;
  width: 600px;

}

.seventh {
  background-color: #ee82ee;
  order: 5;
  width: 700px;
}
```

<br />
<br />

Exercício 2 (mostrando apenas as propriedades que precisam ser alteradas):
```
// Primeira posição X:
body {
  justify-content: flex-start;
}

img {
  align-self: flex-start;
}

// Segunda posição X:
body {
  justify-content: flex-end;
}

img {
  align-self: flex-start;
}

// Terceira posição X:
body {
  justify-content: flex-end;
}

img {
  align-self: flex-end;
}

// Quarta posição X:
body {
  justify-content: flex-start;
}

img {
  align-self: flex-end;
}
```

<br />
<br />

Exercício 3 (mostrando apenas as propriedades que precisam ser alteradas):
```
// Primeira posição O:
body {
  justify-content: center;
}

img {
  align-self: flex-start;
}

// Segunda posição O:
body {
  justify-content: flex-end;
}

img {
  align-self: center;
}

// Terceira posição O:
body {
  justify-content: center;
}

img {
  align-self: flex-end;
}

// Quarta posição O:
body {
  justify-content: flex-start;
}

img {
  align-self: center;
}
```
<br />
<br />

Exercício 4:
```
// Parte 1:
section {
  display: flex;
  height: 100vh;
}


// Parte 2:
section {
  display: flex;
  height: 100vh;
  justify-content: space-between;
}


// Parte 3:
section {
  display: flex;
  height: 100vh;
  justify-content: space-between;
}

.red {
  background-color: red;
  height: 50px;
  width: 50px;
}

.blue {
  align-self: flex-end;
  background-color: blue;
  height: 50px;
  width: 50px;
}


// Parte 4:
section {
  display: flex;
  height: 100vh;
  justify-content: center;
}

.red {
  background-color: red;
  height: 50px;
  width: 50px;
}

.blue {
  background-color: blue;
  height: 50px;
  width: 50px;
}

div {
  align-self: center;
}


// Parte 5:
section {
  display: flex;
  height: 100vh;
  justify-content: center;
}

.red {
  background-color: red;
  flex-grow: 2;
  height: 50px;
  width: 50px;
}

.blue {
  background-color: blue;
  flex-grow: 3;
  height: 50px;
  width: 50px;
}

div {
  align-self: center;
}
```


Exercício Bônus
```
// Parte 1:
section {
      display: flex;
      height: 100vh;
      justify-content: space-between;
    }

    section div {
      border-radius: 50%;
    }

    .red {
      background-color: red;
      height: 50px;
      width: 50px;
    }

    .blue {
      background-color: blue;
      height: 50px;
      width: 50px;
    }

    .green {
      background-color: green;
      height: 50px;
      width: 50px;
    }


// Parte 2:
    section {
      display: flex;
      height: 100vh;
      justify-content: space-around;
    }

    section div {
      border-radius: 50%;
    }

    .red {
      background-color: red;
      height: 50px;
      width: 50px;
    }

    .blue {
      background-color: blue;
      height: 50px;
      width: 50px;
    }

    .green {
      background-color: green;
      height: 50px;
      width: 50px;
    }


// Parte 3:
    section {
      display: flex;
      height: 100vh;
      justify-content: space-evenly;
    }

    section div {
      border-radius: 50%;
    }

    .red {
      background-color: red;
      height: 50px;
      width: 50px;
    }

    .blue {
      background-color: blue;
      height: 50px;
      width: 50px;
    }

    .green {
      background-color: green;
      height: 50px;
      width: 50px;
    }


// Parte 4:
    section {
      display: flex;
      height: 100vh;
      justify-content: space-between;
    }

    section div {
      border-radius: 50%;
    }

    .red {
      background-color: red;
      height: 50px;
      width: 50px;
    }

    .blue {
      align-self: center;
      background-color: blue;
      height: 50px;
      width: 50px;
    }

    .green {
      align-self: flex-end;
      background-color: green;
      height: 50px;
      width: 50px;
    }


// Parte 5:
    section {
      display: flex;
      height: 100vh;
    }

    section div {
      border-radius: 50%;
    }

    .red {
      background-color: red;
      flex-grow: 1;
      height: 50px;
      width: 50px;
    }

    .blue {
      background-color: blue;
      flex-grow: 2;
      height: 50px;
      width: 50px;
    }

    .green {
      background-color: green;
      flex-grow: 3;
      height: 50px;
      width: 50px;
    }
```