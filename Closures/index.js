function x(n) {
  const c = n;

  function y() {
    console.log(c);
  }
  return y();
}
x(3);
console.log(x());
