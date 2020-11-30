let player = {
    name : 'Marta' ,
    lastName : 'da Silva' ,
    age : 34 ,
    medals : { golden: 2, silver: 3 }
};

console.log ( 'A jogadora ' + player.name  + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.' );
console.log ( 'A jogadora ' + player['name']  + ' ' + player['lastName'] + ' tem ' + player['age'] + ' anos de idade.' );

player['fullName'] = player.name + ' ' + player.lastName;

console.log ( 'A jogadora ' + player.fullName + ' ganhou ' + player.medals.golden + ' medalhas de ouro' + ' e ' + player.medals.silver  + ' de prata.');

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log ( 'A jogadora' + player.fullName + ' foi eleita melhor do mundo por ' + player.bestInTheWorld.length + ' vezes!' );

