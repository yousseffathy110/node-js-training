function displayTrianglePattern(height) {
for (let row = 1; row <= height; row++) {
    let pattern = '';

    for (let col = 1; col <= row; col++) {
    pattern += '*';
    }

    console.log(pattern);
    }
}
  
let triangleHeight = prompt("Enter The Triangle Height : ");
displayTrianglePattern(triangleHeight);