// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.


// My answer: this will be very inefficient using sort method which has an operation time of O(n log n)
function sumTwoSmallestNumbers(numbers) {
    let newArr = new Array(2);
    numbers.sort(function (a, b) { return a - b })
    for (let i = 0; i < numbers.length; i++) {
        for(let j = 0; j < 2; j++){
            if(numbers[i] < 0 || newArr.includes(numbers[i]) && numbers[i] !== numbers[i+1]) continue;
            numbers[i] < newArr[j] || newArr[j] === undefined ? newArr[j] = numbers[i] : null
        }
    }
    return newArr.reduce((a,b) => a+b)
}

console.log(sumTwoSmallestNumbers([19, 2, 42, 2, 77]));


//Better Answer:

// function sumTwoSmallestNumbers(numbers) {  
//     var min = Number.MAX_SAFE_INTEGER;
//     var secondMin = Number.MAX_SAFE_INTEGER;
    
//     var n;
//     for (i = 0; i < numbers.length; i++) {
//       n = numbers[i];
//       if(n < min) {
//         secondMin = min;
//         min = n;
//       } else if( n < secondMin ) {
//         secondMin = n;
//       }
//     }
    
//     return min + secondMin;
//   }