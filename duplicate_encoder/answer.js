// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

//original answer
//inefficient because of unnecessary changes to str[match.index] on each loop
function duplicateEncode(word){
    let strArr = word.split("");
    for (const i in strArr) {
        let regStr = strArr[i].replace(/[-\/\\^$*+?.()|[\]{}]/, '\\$&');
        let regex = new RegExp(regStr, 'gi');
        if((match = regex.exec(word)) != null && match.index != i) {
            strArr[match.index] = ')'
            strArr[i] = ')'
        }else{
            strArr[i] = '('
        }
    }
    return strArr.join("")
}


//VOTED BEST PRACTICE
// function duplicateEncode(word){
//     return word
//       .toLowerCase()
//       .split('')
//       .map( function (a, i, w) {
//         return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//       })
//       .join('');
//  }

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));
