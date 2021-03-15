// 1. Identify the base case
// 2. Identify the recursive case
// 3. Get closer and closer and return when needed. Usually you have 2 returns (one of the base case and one for the recursive case)

// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

// 5! = 5 * 4 * 3 * 2 * 1
function findFactorialRecursive(number) {
  // code here
  let i = number;
  if (i === 2) {
    return number;
  }
  i--;
  return number * findFactorialRecursive(i);
}

function findFactorialIterative(number) {
  // code here
  let answer = 1;
  for (let i = number; i > 0; i--) {
    answer = answer * i;
  }

  return answer;
}

console.log("findFactorialRecursive(5)", findFactorialRecursive(5));
console.log("findFactorialIterative(5)", findFactorialIterative(5));
