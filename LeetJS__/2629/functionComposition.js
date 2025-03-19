//https://www.freecodecamp.org/news/function-composition-in-javascript/


function add(a, b) {
  return a + b;
}

function multi(val) {
  return val * 2;
}

function square(val) {
  return val * val;
}

// compose = (f1, f2) => value => f2( f1(value) );
// console.log(multi(add(5, 5)));
// console.log(square(add(5, 5)));
function compositiion(f1, f2, f3){
  return function(a,b){
    return  f3(f2(f1(a,b)))
  }
}


let results = compositiion(add, multi, square)

console.log(results(2,3));


