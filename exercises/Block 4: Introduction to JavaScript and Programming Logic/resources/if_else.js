//Conditional Statements
// https://www.w3schools.com/js/js_if_else.asp
// if → se
// else → senao

let trybe = 19.59;

if (trybe >= 14 && trybe < 14.40  ) {
    console.log ('Esquenta'); 
} else if (trybe > 14.40 && trybe < 15.50) {
    console.log('Course');
}else if (trybe >= 16 && trybe  < 17.50) {
    console.log ('Aula Ao Vivo!');
} else if (trybe >= 18 && trybe < 19.30) {
    console.log('Platão de dúvidas / Exercícios'); 
} else if (trybe >= 19.40 && trybe < 20) {
    console.log('Fechamento!');
} else {
    console.log('Terminamos mais um dia!')
}; 

// Conditional Statements
// Very often when you write code, you want to perform different actions for different decisions.

// You can use conditional statements in your code to do this.

// In JavaScript we have the following conditional statements:

// Use if to specify a block of code to be executed, if a specified condition is true
// Use else to specify a block of code to be executed, if the same condition is false
// Use else if to specify a new condition to test, if the first condition is false
// Use switch to specify many alternative blocks of code to be executed