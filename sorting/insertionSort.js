const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  const result = [];
  result[0] = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < result[0]) {
      result.unshift(array[i]);
    } else if (array[i] > result[result.length - 1]) {
      result.push(array[i]);
    } else {
      for (let j = 0; j < result.length; j++) {
        if (array[i] < result[j + 1]) {
          result.splice(j + 1, 0, array[i]);
          break;
        }
      }
    }
    //console.log("result", result);
  }

  return result;
}

console.log(numbers);
console.log(insertionSort(numbers));

// Andrei's solution

function insertionSort1(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      //move number to the first position
      array.unshift(array.splice(i, 1)[0]);
    } else {
      // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
      if (array[i] < array[i - 1]) {
        //find where number should go
        for (var j = 1; j < i; j++) {
          if (array[i] >= array[j - 1] && array[i] < array[j]) {
            //move number to the right spot
            array.splice(j, 0, array.splice(i, 1)[0]);
          }
        }
      }
    }
  }
}

insertionSort1(numbers);
console.log(numbers);
