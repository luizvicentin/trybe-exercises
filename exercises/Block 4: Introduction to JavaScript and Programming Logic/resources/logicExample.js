//No exercício abaixo, já deixamos a lógica pronta.
//Utilizando essa lógica, qual foi o valor que salvo na variável N em que o resultado que será impresso pelo console.log dará 55?
//8, 9 ou 10?

const n = 9; // O valor de n deberia estar em branco.

let resultado = 100;

for (let index = 0; index <= n ; index += 1) {
    resultado -= index;
}

console.log(resultado);