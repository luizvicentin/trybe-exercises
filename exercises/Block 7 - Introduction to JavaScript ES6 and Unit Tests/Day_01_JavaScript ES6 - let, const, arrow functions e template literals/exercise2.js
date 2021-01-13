// Parte 1
// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
const fatorial = inputFatorial => {
    let calcFatorial = 1;
    for (let i = inputFatorial; i != 0; i -= 1 ){
        calcFatorial = calcFatorial * i;
    }
    console.log(calcFatorial);
}
fatorial(5);

// Parte 2
//Crie uma função que receba uma frase e retorne qual a maior palavra.
const longestWord = string => {

    const arrayString = string.split(' ');
    let longestWord = '';

    for (let index = 0; index < arrayString.length; index += 1) {
        if (arrayString[index].length > longestWord.length) {
            longestWord = arrayString[index];
        }
    }
    return longestWord;
};

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

// Parte 3
// 
// window.onload = function () {
//     let clickCount = 0;
//     const count = document.getElementById('click-count');
//     const button = document.getElementById('click-button');
//     button.addEventListener('click', () => count.innerText = clickCount += 1);
// }

// Parte 4 - stringPhrase.replace() function learned through: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace

const changeString = string => {
    let stringPhrase = 'Tryber x aqui!';

    for (let index = 0; index < stringPhrase.length; index += 1) {
        if (stringPhrase[index] === 'x') {
            return stringPhrase.replace(/x/i, string);
        }
    }

    return stringPhrase;
};


let stringPhrase = changeString('Luiz');
console.log(stringPhrase);

let mySkills = ['HTML', 'CSS', 'FlexBox', 'JavaScript', 'Soft-Skills'];
const finalString = string => {
    mySkills = mySkills.sort();
    return `${string} Minhas cinco principais habilidades são:
    ${mySkills[0]};
    ${mySkills[1]};
    ${mySkills[2]};
    ${mySkills[3]};
    ${mySkills[4]};
    ... #goTrybe`
};

console.log(finalString(stringPhrase));