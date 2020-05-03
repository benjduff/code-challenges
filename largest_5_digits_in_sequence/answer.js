

//CORRECT ANSWER


let digits = '123456789099459';
//98239 is biggest
let answer = 0;
console.time('Time-to-complete');

console.log(setSequence(digits));

function setSequence(digits){    
    for(i=0; i< digits.length; i++){
      let number = digits.substr(i, 5);
      if(Number(number) > answer){
        answer = Number(number);
      } 
    }
    return answer;
}

console.timeEnd('Time-to-complete');