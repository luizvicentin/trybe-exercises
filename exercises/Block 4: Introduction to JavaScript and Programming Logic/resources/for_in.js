let pizzas = {
    sabor: 'Palmito',
    preco: 39.90,
    bordaCatupiry: true
};

for ( let key in pizzas ) {
    // console.log ( pizzas );
    // console.log ( key );
    // console.log ( pizzas.sabor );
    // console.log ( pizzas['preco'] );
    // console.log ( pizzas[key] );
};
// ↑ examples of how we could posible call the index in a object.

let pizzasDoces = [ 'chocolate', 'banana', 'sorvete' ];

for (let key in pizzasDoces) {
    console.log( key, pizzasDoces [ key ]);
}

// ↑ example of how we could posible call the index in an array.