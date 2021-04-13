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

console.log(reverseString("yoyo mastery"));
//should return: 'yretsam oyoy'
