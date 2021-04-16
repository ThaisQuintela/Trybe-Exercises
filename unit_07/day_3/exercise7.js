// Escreva a função wordLengths para passar nos testes já implementados.

const assert = require('assert');

const wordLengths = words => {
  let lenghtsArray = [];
  for (let index = 0; index < words.length; index += 1) {
    lenghtsArray[index] = words[index].length;
  }
  return lenghtsArray;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);