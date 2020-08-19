// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

function solution(nums){
    return nums == null ? [] : [...nums.sort(function(a, b){return a - b})]
}

console.log(solution([1, 5 , 50, 25, 10]));
console.log(solution(null));
console.log(solution([]));

console.log(solution([1,3,2,5,8,7,9, 100, 25, 5000, 50, -2]));