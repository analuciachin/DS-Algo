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
