function x() {
  const c = 3;

  function y() {
    console.log(c);
  }
  return y();
}
x();
console.log(x);
