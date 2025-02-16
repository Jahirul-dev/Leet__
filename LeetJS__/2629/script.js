var compose = function (functions) {
  return function (x) {
    if (functions.length == 0) {
      return x;
    } else {
      functions;
    }
  };
};
