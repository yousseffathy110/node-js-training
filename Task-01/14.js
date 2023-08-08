function calculateFactorial(number) {
if (number === 0 || number === 1) {
    return 1;
}

let factorial = 1;

for (let i = 2; i <= number; i++) {
    factorial *= i;
}

return factorial;
}
  
let num = prompt("Enter A Number : ");
let factorial = calculateFactorial(num);
console.log(`The factorial of ${num} is : ${factorial}`);