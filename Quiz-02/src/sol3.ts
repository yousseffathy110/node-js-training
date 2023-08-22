function oddPositions(list: number[]) {
    const oddElements: number[] = [];
    for (let i = 1; i < list.length; i += 2) {
      oddElements.push(list[i]);
    }
    return oddElements;
}

let arr : number[] = [2,1,5,5,8,17,19,5,13,16]
console.log(oddPositions(arr))