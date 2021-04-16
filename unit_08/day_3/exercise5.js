
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  return names.reduce((counter, currentName) => {
    for (index = 0; index < currentName.length; index += 1) {
      if (currentName[index] === 'A' || currentName[index] === 'a') {
        counter += 1;
      };
    }
    return counter;
  }, 0);
};

assert.deepStrictEqual(containsA(), 20);