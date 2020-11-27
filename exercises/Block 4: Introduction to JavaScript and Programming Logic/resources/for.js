//Suponha que você possua uma lista com marcas de carros:

//let cars = ["Saab", "Volvo", "BMW"];

//Anteriormente para apresentar esses valores, o código que executa essa tarefa seria:

// let cars = ["Saab", "Volvo", "BMW"];
// console.log(cars[0]) // Saab
// console.log(cars[1]) // Volvo
// console.log(cars[2]) // BMW

//Mas, agora que você conhece o for , você pode melhorar o código para algo do tipo:

let cars = ["Saab", "Volvo", "BMW"];
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i])
};

//Os dois códigos geram o mesmo resultado, mas o segundo é muito mais adequado. Pense que, em vez de de 3 carros, essa lista possuísse 1000. No primeiro código, você teria que escrever 1000 linhas!!

// Sintaxe → for ([inicialização]; [condição]; [expressão final]) {
//                                 declaração
//                             };   
// Inicialização: // Uma expressão (incluindo expressões de atribuição) ou declarações variáveis. 
//Geralmente usada para iniciar o contador de variáveis. Esta expressão pode, opcionalmente, declarar novas variáveis com a palavra chave var. Essas variáveis não são locais no loop, isto é, elas estão no mesmo escopo que o loop for está. Variáveis declaradas com let são locais para a declaração.
// O resultado desta expressão é descartado.

// condição
// Uma expressão para ser avaliada antes de cada iteração do loop. Se esta expressão for avaliada para true, declaração será executado. Este teste da condição é opcional. Se omitido, a condição sempre será avaliada como verdadeira. Se a expressão for avaliada como falsa, a execução irá para a primeira expressão após a construção loop for.

// expressão final
// Uma expressão que será validada no final de cada iteração de loop. Isso ocorre antes da próxima avaliação da condição. Geralmente usado para atualizar ou incrementar a variável do contador.

// declaração
// Uma declaração que é executada enquanto a condição for verdadeira. Para executar múltiplas condições dentro do loop, use uma instrução de bloco ({...}) para agrupar essas condições. Para não executar declarações dentro do loop, use uma instrução vazia (;).


