// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

function cockroachSpeed(s) {
    return parseInt(s / 0.036)
}

//variations

// let cockroachSpeed = s =>  Math.floor(s / 0.036)

// function cockroachSpeed(s){
//   return Math.floor((s*100000)/3600)
// }


console.log(cockroachSpeed(1.08), 30);
console.log(cockroachSpeed(1.09), 30);
console.log(cockroachSpeed(0), 0);
console.log(cockroachSpeed(400), 0);
  