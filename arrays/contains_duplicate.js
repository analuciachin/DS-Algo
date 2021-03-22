// Given an integer array nums, return true if any value appears at least twice in the array and return false if element is distinct

// input: nums = [1,2,3,1]
// output: true

// input: nums = [1,2,3,4]
// output: false

// input: nums = [1,1,1,3,3,4,3,2,4,2]
// output: true

const containsDuplicate = (nums) => {
  const numsObj = {};

  for (let i = 0; i < nums.length; i++) {
    const key = nums[i];
    if (nums[i] in numsObj) {
      numsObj[key]++;
    } else numsObj[key] = 1;
  }

  for (let key1 in numsObj) {
    if (numsObj[key1] > 1) {
      return true;
    }
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

// time complexity: O(n)
