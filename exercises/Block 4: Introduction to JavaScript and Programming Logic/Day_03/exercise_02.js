///2. Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo
//retângulo com 5 asteriscos de base.

// n = 5

// *
// **
// ***
// ****
// *****

let n =5;

for (let line = "*"; line.length <= n; line += "*")
  console.log(line);