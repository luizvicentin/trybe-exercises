let pyramidBase = 5;
let symbol = "*";
let lineInput = " ";
let pyramidMiddle = (pyramidBase + 1) / 2;
let left = pyramidMiddle + 1;
let right = pyramidMiddle - 1;

for (indexLines = 0; indexLines < pyramidMiddle; indexLines += 1) {
  for (indexColumns = 1; indexColumns <= pyramidBase; indexColumns += 1) {
    if (indexColumns > right && indexColumns < left) {
      lineInput += symbol;
    } else {
      lineInput += "  ";
    }
  }
  console.log(lineInput);
  lineInput = " ";
  right -= 1;
  left += 1;
}
