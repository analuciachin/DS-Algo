// Given an array, rotate the array to the right by k steps, where k is non-negative

// Follow up:
// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem
// Could you do it in-place with O(1) extra space?

// input: nums = [1,2,3,4,5,6,7] and k=3
// output: [5,6,7,1,2,3,4]
// explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// input: nums = [-1,-100,3,99] and k=2
// output: [3,99,-1,-100]
// explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

const rotate = (nums, steps) => {
  const removedElements = nums.slice(nums.length - steps, nums.length);
  const elementsLeft = nums.slice(0, nums.length - steps);
  return removedElements.concat(elementsLeft);
};

console.log("rotate", rotate([1, 2, 3, 4, 5, 6, 7], 3));

// time complexity: O(1)

const rotate1 = (nums, steps) => {
  const initialPos = nums.length - steps;
  const subarray = [];
  for (let i = nums.length - 1; i >= initialPos; i--) {
    subarray.unshift(nums[i]);
    nums.pop();

    console.log(nums);
  }
  return subarray.concat(nums);
};

// time complexity: O(n)
