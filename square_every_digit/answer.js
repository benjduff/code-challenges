Description:
// Welcome. In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
    let sqrd = []
    const digits = num.toString().split('')
    digits.map(i => {
      let j = parseInt(i)
        sqrd.push(Math.pow(j, 2))
    })
    sqrd = parseInt(sqrd.join(''))
    return sqrd
  }

  squareDigits(9119);
  

  //Better answer:
//   function squareDigits(num){
//     return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
//   }