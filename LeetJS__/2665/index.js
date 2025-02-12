var createCounter = function (init) {
  let count = init;

  return {
    increment: function () {
      return ++count;
    },
    decrement: function () {
      return --count;
    },
    reset: function () {
      return (count = init);
    },
  };
};
const counter = createCounter(5);

counter.increment();
counter.decrement();
counter.reset();
