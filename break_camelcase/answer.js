// Complete the solution so that the function will break up camel casing, using a space between words.

function solution(string) {
    let arr = string.split("");
  for(let i = 0; i < arr.length; i++){
    if(arr[i-1] !== undefined && arr[i] === arr[i].toUpperCase() && arr[i-1] === arr[i-1].toLowerCase()){
     arr.splice(i, 0, " ");
       i++;
     }
    }
  return arr.join("");
}


// using replace()
// function solution(string) {
//     return(string.replace(/([A-Z])/g, ' $1'));
// }


console.log(solution('camelCasing'), 'camel Casing');
console.log(solution('camelCasingTest'), 'camel Casing Test');
