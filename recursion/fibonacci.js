// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 -> 2+3

// give number return index
function fibonacciIterativeByValue(n) {
  let index = 1;
  const fibSequence = [];
  fibSequence.push(0, 1);

  if (fibSequence[0] === n) {
    return 0;
  } else if (fibSequence[1] === n) {
    return 1;
  } else {
    while (fibSequence[index] !== n && index < 10) {
      fibSequence.push(fibSequence[index - 1] + fibSequence[index]);
      index++;
    }
  }

  return index;
}

//console.log(fibonacciIterativeByValue(3));

function fibonacciIterative(n) {
  let arr = [0, 1];

  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}

console.log(fibonacciIterative(8));

function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(8));
// time complexity: O(n)

// Dynamic Programming - Memoization
function fibonacciMaster() {
  let cache = {};
  // return function - JS closure
  return function fib(n) {
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

const fasterFib = fibonacciMaster();
console.log("DP", fasterFib(10));
// time complexity: O(n)

function fibonacciMaster2(n) {
  let answer = [0, 1];
  for (let i = 2; i <= n; i++) {
    answer.push(answer[i - 2] + answer[i - 1]);
  }
  return answer.pop();
}

console.log("DP2", fibonacciMaster2(10));
