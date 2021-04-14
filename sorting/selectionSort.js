const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  let smallest;
  let index;
  for (let i = 0; i < array.length; i++) {
    smallest = array[i];
    for (let j = i; j < array.length; j++) {
      if (array[j] < smallest) {
        smallest = array[j];
        index = j;
      }
    }
    const current = array[i];
    array[i] = smallest;
    array[index] = current;
  }

  return array;
}

console.log(numbers);
console.log(selectionSort(numbers));
