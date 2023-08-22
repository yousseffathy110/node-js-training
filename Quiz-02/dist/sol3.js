"use strict";
function oddPositions(list) {
    const oddElements = [];
    for (let i = 1; i < list.length; i += 2) {
        oddElements.push(list[i]);
    }
    return oddElements;
}
let arr = [2, 1, 5, 5, 8, 17, 19, 5, 13, 16];
console.log(oddPositions(arr));
