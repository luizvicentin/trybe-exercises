//Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda.
//A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)

function profit ( costOfProduct, saleValue ) {
  if ( costOfProduct > 0 && saleValue > 0 ) {
    let totalProfit = ( (saleValue - costOfProduct) * 1000) * 0.8;
    return totalProfit;
  } else {
    return "Error";
  }
}
console.log (profit( 10 , 20));
