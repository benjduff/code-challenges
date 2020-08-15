// The Fibonacci numbers are the numbers in the following integer sequence (Fn):

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

// such as

// F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

// Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

// F(n) * F(n+1) = prod.

// Your function productFib takes an integer (prod) and returns an array:

// [F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
// depending on the language if F(n) * F(n+1) = prod.

// If you don't find two consecutive F(m) verifying F(m) * F(m+1) = prodyou will return

// [F(m), F(m+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
// F(m) being the smallest one such as F(m) * F(m+1) > prod.

//my initial answer, silly of me to use for instead of while, don't know why I did that
function productFib(prod){
    let fib1 = 0;
    let fib2 = 1;
    for (let i = 0; i < prod; i++) {
        if(fib1 * fib2 === prod) return [fib1, fib2, true]
        if(fib1 * fib2 > prod) {
            return [fib1, fib2, false]
        } else {
            let temp = fib1
            fib1 = fib2
            fib2 += temp
        }
    }   
}

//VOTED BEST PRACTICE, easy to see why.
// function productFib(prod){
//     var n = 0;
//     var nPlus = 1;  
//     while(n*nPlus < prod) {
//       nPlus = n + nPlus;
//       n = nPlus - n;
//     }
//     return [n, nPlus, n*nPlus===prod];
// }

//another elegant easy to understand solution
// function productFib(prod){
//     let [a, b] = [0, 1];
//     while(a * b < prod) [a, b] = [b, a + b];
//     return [a, b, a * b === prod];
// }


console.log(productFib(4895), [55, 89, true])
console.log(productFib(5895), [89, 144, false])
console.log(productFib(74049690), [6765, 10946, true])
console.log(productFib(84049690), [10946, 17711, false])
console.log(productFib(193864606), [10946, 17711, true])
console.log(productFib(447577), [610, 987, false])
console.log(productFib(602070), [610, 987, true])
