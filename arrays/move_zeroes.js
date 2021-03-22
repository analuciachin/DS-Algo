// Given an integer array nums, move all 0's to the end of it while maintaining the relative orger of the non-zero elements

// Note that you must do this in-place without making a copy of the array

// input: nums = [0,1,0,3,12]
// output: [1,3,12,0,0]

// input: num=[0]
// output: [0]

const moveZeroes = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums[nums.length] = nums[i];
      nums.splice(i, 1);
    }
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));
console.log(moveZeroes([0, 1, 0, 3, 12, 0]));

// time complexity: O(n)
