// Google question
// Given an array = [2,5,1,2,3,5,1,2,4]
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]
// It should return 1

// Given an array = [2,3,4,5]
// It should return undefined

const firstRecurring = (arr) => {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    const key = arr[i];
    if (key in obj) {
      return key;
    } else obj[key] = 1;
  }
};

console.log(firstRecurring([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurring([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurring([2, 3, 4, 5]));

// time complexity: O(n)
