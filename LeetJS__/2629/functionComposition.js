function add(a, b) {
  return a + b;
}

function multi(val) {
  return val * 2;
}

function square(val) {
  return val * val;
}

console.log(multi(add(5, 5)));
console.log(square(add(5, 5)));
