/* Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
Exemplo de palíndromo: arara .
verificaPalindrome("arara") ;
Retorno esperado: true
verificaPalindrome("desenvolvimento") ;
Retorno esperado: false
 */

function verifyPalindrome ( word ) {
    for ( let index = 0; index < word.length; index +=1 ) {
        if ( word[index] !== word[word.length - 1 -index] ) {
        return false;
    }
}
    return true;
};

console.log(verifyPalindrome ("arara")) ;
console.log(verifyPalindrome ("software")) ;