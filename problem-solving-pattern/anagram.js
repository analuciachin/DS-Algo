// Frequency Counter Pattern
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let freqCounter1 = {};
  let freqCounter2 = {};
  let result;

  for (let i = 0; i < str1.length; i++) {
    const letter1 = str1[i];
    if (letter1 in freqCounter1) {
      freqCounter1[letter1]++;
    } else freqCounter1[letter1] = 1;
  }

  for (let j = 0; j < str2.length; j++) {
    const letter2 = str2[j];
    if (freqCounter2[letter2]) {
      freqCounter2[letter2]++;
    } else freqCounter2[letter2] = 1;
  }

  console.log(freqCounter1);
  console.log(freqCounter2);

  for (let key in freqCounter1) {
    result = true;
    if (freqCounter1[key] !== freqCounter2[key]) {
      result = false;
      break;
    }
  }

  return result;
}

console.log(validAnagram("macaco", "cocama"));
