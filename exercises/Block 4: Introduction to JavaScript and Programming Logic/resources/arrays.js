//Arrays
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
// Descrição
// Arrays são objetos semelhantes a listas que vêm com uma série de  métodos embutidos para realizar operações de travessia e mutação. Nem o tamanho de um array JavaScript nem os tipos de elementos são fixos. Já que  o tamanho de um array pode ser alterado a qualquer momento e os dados podem ser armazenados em posições não contíguas, arrays JavaScript não tem a garantia de serem densos; isso depende de como o programador escolhe usá-los. De uma maneira geral, essas são características convenientes, mas, se esses recursos não são desejáveis para o seu caso em particular, você pode considerar usar arrays tipados.

// Arrays não podem usar strings como índices (como em um array associativo), devem ser usados números inteiros. Definir ou acessar não-inteiros usando notação de colchetes (ou notação de ponto) não vai definir ou recuperar um elemento do array em si, mas sim definir ou acessar uma variável associada com a coleção de propriedades de objeto daquele array. As propriedades de objeto do array e a lista de elementos do array são separados, e as operações de travessia e mutação não podem ser aplicadas a essas propriedades nomeadas.

// Criando um Array:

let pizzas = ['4 Queijos', 'Frango com Catupiry', 'Marguerita', 'Palmito', 'Rúcula com Tomate Seco'];

pizzas.push('Portuguesa'); 

for ( let index = 0; index < pizzas.length; index += 1) {
    console.log( pizzas[index]); //Lista com cada sabor em uma linha.
}

console.log('Menu de sabores: ' + (pizzas.sort()) + '.'); //lista com os sabores em ordem alafabética e na mesma linha.
console.log('Sua melhor pizza é a de ' + pizzas[5] + '!');