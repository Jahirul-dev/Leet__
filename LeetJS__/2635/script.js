var arr = [1, 3, 2];
var fn = function () {};

var map = function (arr, fn) {
  let returnedArray = [];
  for (i = 0; i <= arr.length; i++) {
    returnedArray[i] = fn(arr[i], i);
  }
  return returnedArray;
};
console.log(map(arr, fn).values);
