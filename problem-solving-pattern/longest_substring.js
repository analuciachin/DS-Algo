// Sliding Window Pattern

// Given a string s, find the length of the longest substring without repeating characters

// input: s = "abcabcbb"
// output: 3
// explanation: the answer is "abc", with the length of 3

// input: s = "bbbbb"
// output: 1
// explanation: the answer is "b", with the length of 1

// input: s = "pwwkew"
// output: 3
// explanation: the answer is "wke", with the length of 3. Notice that the answer must be a substring, "pwke" is a subsequence and not a substring

// input: ""
// output: 0

const longestSubstring = (str) => {
  const letters = [];
  let maxLength = 0;
  let numChar = 0;
  let charObj = {};
  let position = 0;

  for (let i = 0; i < str.length; i++) {
    letters.push(str[i]);
  }

  for (let j = 0; j < letters.length; j++) {
    if (letters[j] in charObj) {
      position = j;
      maxLength = numChar;
      charObj = {};
      numChar = 0;
      break;
    } else {
      numChar++;
      charObj[letters[j]] = 1;
    }
  }

  for (let k = position; k < letters.length; k++) {
    //console.log("k", k);
    if (letters[k] in charObj) {
      position = k;
      maxLength = numChar;
      charObj = {};
      break;
    } else {
      numChar++;
      charObj[letters[k]] = 1;
    }
  }

  return maxLength;
};

console.log(longestSubstring("abcabcbb"));
console.log(longestSubstring("bbbbb"));
console.log(longestSubstring("pwwkew"));
console.log(longestSubstring(""));
