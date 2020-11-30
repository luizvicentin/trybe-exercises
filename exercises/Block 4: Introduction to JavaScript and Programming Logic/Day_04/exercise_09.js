function isOdd(number1, number2, number3) {
  if (number1 % 2 != 0 || number2 % 2 != 0 || number3 % 2 != 0) {
    return "We have some Odds over here!";
  }
}
console.log(isOdd( 6 , 8, 15));
