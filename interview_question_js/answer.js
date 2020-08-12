// https://www.codewars.com/kata/5b358a1e228d316283001892/javascript

// You receive the name of a city as a string, and you need to return a string that shows how many times each letter shows up in the string by using an asterisk (*).

// For example:

// "Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*"
// As you can see, the letter c is shown only once, but wih 2 asterisks.

// The return string should include only the letters (not the dashes, spaces, apostrophes, etc). There should be no spaces in the output, and the different letters are separated by a comma (,) as seen in the example above.

// Note that the return string must list the letters in order of their first appearence in the original string.


// MY ANSWER
function getStrings(city){
  let charArr = city.toLowerCase().split("");
  let result = [];
  charArr.forEach(i => {
      let a = result.findIndex(el => el.includes(i));
      a > -1 ? result[a] += "*" : /[a-z]/.test(i) ? result.push(i + ":*") : charArr.filter(e => e !== i);
    }
  )
  return result.join(',')
};

//VOTED BEST PRACTICE 
// function getStrings(city) {
//   city = city.toLowerCase();
//   let obj = {};
//   let str = '';

//   for (let elem of city) {
//       if (!(elem in obj)) {
//           obj[elem] = '*';
//       } else {
//           obj[elem] += '*';
//       }
//   }

//   for (let key in obj) {
//       if (key !== ' ') {
//           str += key + ':' + obj[key] + ',';
//       }
//   }

//   return str.substring(0, str.length - 1);
// }


console.log(getStrings("Chicago"));
console.log(getStrings("Bangkok"));
console.log(getStrings("Las Vegas"));
console.log(getStrings("Melbo-urnnne "));