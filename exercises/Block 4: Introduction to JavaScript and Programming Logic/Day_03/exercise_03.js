//3. Agora inverta o lado do triângulo.
//- Atenção! Note que esse exercício é bem mais complexo que o anterior!
//Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.

let number = 5;
let asterix = "  ";
let spaces = "  ";

for (let index = 0; index < number; index += 1) {
  asterix += "*";
  for (let position = index; position < number; position++) {
    spaces += "  ";
  }

  console.log(spaces, asterix);
  spaces = "  ";
}
