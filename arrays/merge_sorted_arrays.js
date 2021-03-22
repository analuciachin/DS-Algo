// create a function that merges 2 sorted arrays
// [0, 3, 4, 31] and [4, 6, 30]
// result: [0, 3, 4, 4, 6, 30, 31]

const mergeSortedArrays = (array1, array2) => {
  let mergedArray = [];
  let i = 0;
  let j = 0;

  while (i < array1.length || j < array2.length) {
    if (i === array1.length) {
      mergedArray.push(array2[j]);
      j++;
    } else if (j === array2.length) {
      mergedArray.push(array1[i]);
      i++;
    } else {
      if (array1[i] < array2[j]) {
        mergedArray.push(array1[i]);
        i++;
      } else {
        mergedArray.push(array2[j]);
        j++;
      }
    }
  }

  console.log(mergedArray);
  return mergedArray;
};

mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);

// time complexity: O(a + b)
