const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  let round = 0;

  while (round < array.length) {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] > array[j]) {
          const low = array[j];
          const high = array[i];
          array[i] = low;
          array[j] = high;
        } else {
          i++;
        }
      }
    }
    round++;
  }
  return array;
}

console.log(numbers);
console.log(bubbleSort(numbers));

// Andrei solution

function bubbleSort1(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        //Swap the numbers
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}

bubbleSort1(numbers);
console.log(numbers);
