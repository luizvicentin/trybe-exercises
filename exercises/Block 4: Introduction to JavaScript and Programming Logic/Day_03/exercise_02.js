///2. Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo
//retângulo com 5 asteriscos de base.
// n = 5

// *
// **
// ***
// ****
// *****

/* METHOD 1 → FOR Loop
[Based on Eloquent JavaScript - 3rd edition (2018) Exercise on Chapter 2 → Program Struture (Looping a triangle)]
It may be useful to know that you can find the length of a string by writing .length after it.
let abc = "abc";
console.log(abc.length);
// → 3 */

let n = 5;

for (let triangle = "*"; triangle.length <= n; triangle += "*") {
  console.log(triangle);
}

/*
for ( starting value ; condition to stop looping ; adjustment per interaction )
.length → count how many characters are in the string
Reason to use .length:
'string' < = Number (Don't wanna that)
Number < = Number (Wanna this)
triangle += '*' → triangle = triangle + '*'
*/

/* METHOD 2 → WHILE Loop
Based on iVuDang YT Channel ( https://www.youtube.com/watch?v=bci_CJbFo-Y)
*/

let triangle2 = "#";

while (triangle2.length < 5) {
  console.log(triangle2);
  triangle2 = triangle2 + "#";
}

console.log(triangle2);