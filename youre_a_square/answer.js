// Given an integral number, determine if it's a square number:

// personal challenge: use binary search to complete
var isSquare = function(n){
    let l = 0
    let r = n 
    while(l <= r){
        mid = Math.floor(l + (r - l) / 2)
        if(mid**2 === n) return true
        if(mid**2 < n){
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    return false
}


  console.log(isSquare(-1), false, "-1: Negative numbers cannot be square numbers");
  console.log(isSquare( 0), true, "0 is a square number (0 * 0)");
  console.log(isSquare( 3), false, "3 is not a square number");
  console.log(isSquare( 4), true, "4 is a square number (2 * 2)");
  console.log(isSquare(25), true, "25 is a square number (5 * 5)");
  console.log(isSquare(26), false, "26 is not a square number");