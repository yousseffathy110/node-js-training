function calculate(operator, num1, num2) {
let result;

switch (operator) {
    case '+':
    result = num1 + num2;
    break;
    case '-':
    result = num1 - num2;
    break;
    case '*':
    result = num1 * num2;
    break;
    case '/':
    result = num1 / num2;
    break;
    default:
    console.log('Invalid operator');
    return;
}

console.log(`Result: ${result}`);

}
  
let operator = '+';
let number1 = 10;
let number2 = 5;
calculate(operator, number1, number2);