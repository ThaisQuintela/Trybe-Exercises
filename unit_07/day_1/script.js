// Parte 1:
// Exercício 1:
const testingScope = escopo => { 
  if (escopo === true) { 
    let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = `Não devo ser utilizada fora meu escopo (else)`;
    console.log(elseScope);
  }
}

testingScope(true);


// Exercício 2:
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const arrangeArray = oddsAndEvens => {
  const rearrange = oddsAndEvens.sort(function(a, b){return a - b});
  return `Os números ${rearrange} se encontram ordenados de forma crescente!`
}

console.log(arrangeArray(oddsAndEvens));


//Parte 2:
// Exercício 1:
const fatorial = number => {
  let answer = number;
  for (let index = number - 1; index > 0; index -= 1) {
    answer *= index;
  }
  return answer;
};

console.log(fatorial(6));

// Exercício 2:
const longestWord = "Antônio foi no banheiro e não sabemos o que aconteceu";

const findLongestWord = longestWord => {
  const arrayWords = longestWord.split(' ');
  let longest = '';
  for (let index = 0; index < arrayWords.length-1; index += 1) {
    if (arrayWords[index].length < arrayWords[index+1].length) {
      longest = arrayWords[index+1];
    }
  }
  return longest;
}

console.log(findLongestWord(longestWord));


// Exercício 3:
let clickCounter = 0;
let text = document.getElementById('counter');

const buttonCounter = document.getElementById('counter');
buttonCounter.addEventListener('click', () => text.innerHTML = `${clickCounter += 1}!!!`);


// Exercício 4:
const tryber = (name) => {
  const tryberString = 'Tryber x aqui!';
  return tryberString.replace('x', name);
}

const skills = ['HTML', 'CSS', 'JS', 'Lógica', 'Git'];

const addSkills = tryber => {
  const organizeSkills = skills.sort();
  return `${tryber}
  Minhas cinco principais habilidades são:
  - ${organizeSkills[0]};
  - ${organizeSkills[1]};
  - ${organizeSkills[2]};
  - ${organizeSkills[3]};
  - ${organizeSkills[4]};
  #goTrybe`
}

console.log(addSkills(tryber('Thais')));
