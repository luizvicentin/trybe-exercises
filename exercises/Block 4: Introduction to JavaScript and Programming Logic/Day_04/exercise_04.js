//Return if the number is positive or negative
function positiveOrNegative( number ) {
  if ( number > 0) {
    return number + " is Positive!";
  } else if ( number < 0) {
    return number + "Negative";
  } else {
    return number + "Zero";
  }
}

console.log(positiveOrNegative(23));