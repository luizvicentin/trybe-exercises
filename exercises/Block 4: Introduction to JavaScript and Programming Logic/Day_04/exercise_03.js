//Compare and return the greater number
function greaterThan ( a , b , c) {
  if (a > b && a > c) {
    return ( a + ' is greater than ' + b + ' and ' + c + '.');
  } else if (b > a && b > c) {
    return ( b + ' is greater than ' + a + ' and ' + c + '.' );
  } else {
    return ( c + ' is greater than ' + a + ' and ' + b + '.' );
  }
};

console.log(greaterThan( 9 , 11 , 20 )); 