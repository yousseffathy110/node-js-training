function ReverseString(word){
    let size = word.length - 1;
    let NewWord = ""
    for(let i = size; i >= 0 ; i--){
        NewWord += word[i]
    }
    return NewWord
}
console.log(ReverseString("12345"))