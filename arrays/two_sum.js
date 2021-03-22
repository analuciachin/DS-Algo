// Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to a target

// You may assume that each input would have exactly one solution, and you may not use the same element twice

// inputs: nums=[2,7,11,15], target=9
// output: [0,1] => because 2+7 = 9

// inputs: nums=[3,2,4], target=6
// output: [1,2]

// inputs: nums=[3,3], target=6
// output: [0,1]

const twoSum = (nums, target) => {
  const result = [];
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i, j);
      }
    }
  }
  return result;
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));

// time complexity: O(n^2)
