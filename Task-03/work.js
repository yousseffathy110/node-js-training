// let num = 10;
// function outer(){

//     function inner(){
//         let num = 20;
//     }

//     console.log(num)
// }
// outer();  
//the output 10


// *******************************************************************


// let person = {
//     name : "john",
//     getname : function(){
//         return name;
//     }
// }

// console.log(person.getname())
// error because the this keyword

// *************************************************************************


// const i;
// for(i = 1; i < 5; i++){

// }
// console.log(i)
// error because the const var cannot be assigned


// ************************************************************************


// const arr = [1, 2, 3, 4, 5]
//     ,newarr = [];
// for(let val in arr){
//     newarr.push(val);
//     console.log(newarr)
// }
// 1  
// 1 2 
// 1 2 3 
// 1 2 3 4 


// ******************************************************************


// const arr = [1, 2, 3, 4, 5],
// [foo, bar, ...baz] = arr

// console.log(foo)
// console.log(bar)
// console.log(baz)
// 1
// 2
// [ 3, 4, 5 ]


// ***************************************************************


function addvalues(...values){
    // Write Js Code To Add 1 +2 + 3 + 4

    let sum = 0;

    for(let i = 0 ; i < values.length ; i++){
        sum += values[i];
    }

    console.log(sum)
}
addvalues(1, 2, 3, 4)