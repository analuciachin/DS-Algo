// Create a function that reverses a string
// 'Hi My name is Ana' should be:
// 'anA si eman yM iH'

function reverse(str) {
  let newStr = "";
  for (let i = str.length - 1; i > -1; i--) {
    newStr = newStr.concat(str[i]);
  }
  console.log(newStr);
  return newStr;
}

reverse("Hi My name is Ana");

// Andrei solution
function reverse(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "hmm that's not good";
  }

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }

  console.log(backwards.join(""));
  return backwards.join("");
}

reverse("Hi My name is Ana");
