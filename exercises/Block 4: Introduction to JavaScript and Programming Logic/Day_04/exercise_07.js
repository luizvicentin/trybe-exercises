function finalGrades(grade) {
  if ( grade >= 90) {
    return "A";
  } else if (grade >= 80) {
    return "B";
  } else if (grade >= 70) {
    return "C";
  } else if (grade >= 60) {
    return "D";
  } else if (grade >= 50) {
    return "E";
  } else {
    return "F";
  }
}

console.log(finalGrades(85));
