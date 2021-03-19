// Sliding Window Pattern

// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

// Examples
// minSubArrayLen([2,3,1,2,4,3], 7) => 2 because [4,3] is the smallest subarray
// minSubArrayLen([2,1,6,5,4], 9) => 2 because [5,4] is the smallest subarray
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) => 1 because [62] is greater than 52

function minSubArrayLen(arr, num) {
  // let ... of => elements of an array
  // let ... in => index of the elements of the array

  for (let item of arr) {
    if (item >= num) return 1;
  }

  let arrayLen = 2;
  let sumElements;

  while (sumElements < num || arrayLen <= arr.length) {
    sumElements = 0;
    for (let i = 0; i < arrayLen; i++) {
      sumElements = sumElements + arr[i];
      if (sumElements >= num) {
        return arrayLen;
      }
    }
    //console.log(arrayLen, sumElements);
    for (let j = arrayLen; j < arr.length; j++) {
      sumElements = sumElements - arr[j - arrayLen] + arr[j];
      if (sumElements >= num) {
        return arrayLen;
      }
    }
    arrayLen++;
  }

  return 0;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // result => 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // result => 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // result => 5
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // result => 1
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95));
