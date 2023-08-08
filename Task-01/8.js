function findLargestNumber(num1, num2, num3) {
    let largest = num1;
  
    if (num2 > largest) {
      largest = num2;
    }
  
    if (num3 > largest) {
      largest = num3;
    }
  
    return largest;
  }
  
  // Example usage:
  let number1 = 10;
  let number2 = 5;
  let number3 = 7;
  
  let largestNumber = findLargestNumber(number1, number2, number3);
  console.log(`The largest number is : ${largestNumber}`);