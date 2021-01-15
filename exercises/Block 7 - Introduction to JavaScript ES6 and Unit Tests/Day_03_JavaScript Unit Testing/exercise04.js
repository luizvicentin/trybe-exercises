const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// 1. A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
// 2. Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
// 3. Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
// 4. Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
// 5. Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
// 6. Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

// implemente seus testes aqui

const myList = [1, 2, 3, 4];

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);

myRemoveWithoutCopy(myList, 1);
assert.strictEqual(myList.length, 3);

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);