function isEven(number1, number2, number3) {
  if (number1 % 2 != 0 || number2 % 2 != 0 || number3 % 2 != 0) {
    return "We have some Evens over here!";
  }
}
console.log(isEven(5, 7, 10));
