function vowels(x : string){
    let count : number = 0;
    let v : string = "AaEeOoUuiI"
    let size : number = x.length
    for(let i = 0 ; i < size ; i++){
        for(let j = 0 ; j < 10 ; j++)
        {
            if (x[i] == v[j])
            {
                count++;
            }
        }
    }
    return count;
}
console.log(vowels("ADefrtgoUO"))