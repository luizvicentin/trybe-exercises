//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
//Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
//Valor esperado no retorno da função: Fernanda .

function biggestWord(words) {
  let biggestWord = words[0];
  for (let index in words) {
    if (biggestWord.length < words[index].length) {
      biggestWord = words[index];
    }
  }
  return biggestWord;
}

console.log(biggestWord(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]));
