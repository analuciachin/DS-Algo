//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str) {
  const stringReversed = [];
  let newStr;

  for (let i = str.length - 1; i > -1; i--) {
    stringReversed.push(str[i]);
  }

  newStr = stringReversed.toString();
  newStr = newStr.replace(/\,/g, "");
  return newStr;
}

//console.log(reverseString("yoyo mastery"));
//should return: 'yretsam oyoy'

let counter = -1;
const letter = [];
function reverseStringRecursive(str) {
  if (counter === str.length) {
    console.log(counter);
    let newStr = letter.reverse().toString();
    return newStr.replace(/\,/g, "");
  }
  counter++;
  letter.push(str[counter]);
  return reverseStringRecursive(str);
}

console.log(reverseStringRecursive("yoyo mastery"));
//should return: 'yretsam oyoy'
