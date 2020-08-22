// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// my solution
var moveZeros = function (arr) {
    let nonZero = []
    let zeros = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0) {
            zeros.push(arr[i])
        } else {
            nonZero.push(arr[i])
        }
    }
    return nonZero.concat(zeros)
}

// another clever solution from comments
// var moveZeros = function (arr) {
//     return [
//       ...(arr.filter(n => n !== 0)),
//       ...(arr.filter(n => n === 0))
//     ];
// }

console.log(moveZeros([1,2,0,1,false,0,1,0,3,0,1]))
console.log(moveZeros([9,0,9,1,2,1,1,3,1,9,0,0,9,0,0,0,0,0,0,0]));
console.log(moveZeros(["a",0,"b",null,"c","d",1,false,1,3,[],1,9,0,{},0,9,0,0,0,0,0,0,0]));
