// Parte 1:
let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

//Exercício 1:
console.log(`Bem-vinda, ${info.personagem}`);

//Exercício 2:
info.recorrente = "Sim";
console.log(info);

//Exercício 3:
for (let key in info) {
  console.log(key);
}

//Exercício 4:
for (key in info) {
  console.log(info[key]);
}

//Exercício 5:
let infoPatinhas = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim"
};
  console.log(`${info.personagem} e ${infoPatinhas.personagem}`);
  console.log(`${info.origem} e ${infoPatinhas.origem}`);
  console.log(`${info.nota} e ${infoPatinhas.nota}`);
  if (info.recorrente === "Sim" && infoPatinhas.recorrente === "Sim") {
    console.log("Ambos recorrentes")
}


//Parte 2:
//Exercício 1:
function palindrome(word) {
  let newWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    newWord = newWord + word[i];
  }
  if (word === newWord) {
    return true;
  } else {
    return false;
  }
}
console.log(palindrome("arara"));


//Exercício 2:
function highest(array) {
  for (key in array) {
    if (array[key] > array[key-1]) {
      bigNum = key;
    }
  }
  return bigNum;
}
console.log(highest([2, 3, 6, 7, 10, 1]));


//Exercício 3:
function smallest(array) {
  for (key in array) {
    if (array[key] < array[key-1]) {
      smallNum = key;
    }
  }
  return smallNum;
}
console.log(smallest([2, 4, 6, 7, 10, 0, -3]));


// Exercício 4:
function biggestName(array) {
  let name = "";
  for (let key = 1; key <= array.length - 2; key++) {
    if (array[key].length > array[key+1].length) {
      name = array[key];
    } 
  }
  if (array[array.length - 1].length > array[array.length - 2].length) {
      name = array[array.length - 1];
    }
  if (array[0].length > name.length) {
      name = array[0];
    }
  return name;
}
console.log(biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana', "Francisco"]));


// Exercício 5:
function repetition(array) {
  let num = 0, numRep = 0, number = 0;
  for (let key in array) {
    for (let index in array) {
      if (array[key] === array[index])
      numRep++;
    }
    if (numRep > num) {
      num = numRep;
      number = array[key];
    }
    numRep = 0;
  } return number;
}
console.log(repetition([2, 3, 2, 5, 8, 2, 3]));


// Exercício 6:
function somatorio(N) {
  let result = 0;
  for (let index = N; index > 0; index--) {
    result = result + index;
  }
  return result;
} console.log(somatorio(5));


// Exercício 7:
function end(word, ending) {
  let test = "";
  for (let key = (word.length - ending.length); key <= word.length - 1; key++) {
    test = test + word[key];
  }
  if (test === ending) {
    return true;
  }
  return false;
}
console.log(end("trybe", "be"));