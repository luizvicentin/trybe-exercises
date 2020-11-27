//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
//A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
//Duas maneiras de fazer o mesmo exercício, pelo menos pra mim. 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
 
for (let index = 0; index < numbers.length; index += 1) {
    sum += numbers[index];
  }
  
  let average = sum / numbers.length;
  
  console.log(average);

// ------------------------------------------------------------------------------------

let total = 0;

for ( index = 0; index < numbers.length; index += 1) {
    total += (numbers[index] / (numbers.length));
};

console.log(total.toFixed(2));
