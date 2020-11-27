//Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;

let total = 0;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for ( let index = 0; index < numbers.length; index += 1 ) {
    total += numbers[index];
 };

 console.log(total);
