//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
//Array de teste: [2, 4, 6, 7, 10, 0, -3];.
//Valor esperado no retorno da função: 6.

function indexLowestValue (array) {
  let indexMin = 0;
  for ( let index in array ) {
    if ( array[indexMin] > array[ index ]) {
      indexMin = index
    }
  }
  return indexMin;
}  

console.log(indexLowestValue([2, 4, 6, 7, 10, 0, -3]));
