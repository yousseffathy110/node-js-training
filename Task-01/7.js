let input = prompt("Enter A Number: ");
let number = Number(input);

function Multiplies(x) {
  if (x === 0 || x < 0) {
    return "Not A Valid Value!";
  } 
  else {
    if (x % 5 === 0 || x % 8 === 0) {
      return "Multiplies!!!";
    } else {
      return "Not Multiplies!";
    }
  }
}
console.log(Multiplies(number));