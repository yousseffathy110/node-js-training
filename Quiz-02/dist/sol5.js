"use strict";
function vowels(x) {
    let count = 0;
    let v = "AaEeOoUuiI";
    let size = x.length;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < 10; j++) {
            if (x[i] == v[j]) {
                count++;
            }
        }
    }
    return count;
}
console.log(vowels("ADefrtgoUO"));
