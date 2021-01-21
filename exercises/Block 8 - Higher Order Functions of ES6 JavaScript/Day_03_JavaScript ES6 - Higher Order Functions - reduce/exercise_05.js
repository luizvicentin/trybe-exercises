//5. Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra A maiúscula ou minúscula.
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((totalOfA, currentWord) => {
    return totalOfA + currentWord.match(/a/gi).length;
  }, 0);
}

assert.deepStrictEqual(containsA(), 20);

//JavaScript String match() Method → https://www.w3schools.com/jsref/jsref_match.asp
