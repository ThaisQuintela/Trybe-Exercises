// Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

const removeVowels = (word) => {
  const characters = word.split('');
  let results = '';
  let counter = 0;

  for (let i = 0; i < characters.length; i += 1) {
    if (
      characters[i] === 'a' ||
      characters[i] === 'o' ||
      characters[i] === 'i' ||
      characters[i] === 'e' ||
      characters[i] === 'u'
    ) {
      counter += 1;
      results += counter;
    } else {
      results += characters[i];
    }
  }
  return results;
};

const parameter = 'Dayane';
const result = 'D1y2n3';

const assert = require('assert')

assert.strictEqual(typeof removeVowels, 'function');
assert.strictEqual(removeVowels(parameter)[0], parameter[0]);
assert.strictEqual(typeof removeVowels(parameter), 'string');
assert.strictEqual(removeVowels('aeiou'), '12345');
assert.strictEqual(removeVowels(parameter), result);