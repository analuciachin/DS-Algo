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

// Andrei solution

function selectionSort1(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    // set current index as minimum
    let min = i;
    let temp = array[i];
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[min]) {
        //update minimum if current is lower that what we had previously
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

selectionSort1(numbers);
console.log(numbers);
