// Normal function 
 function Nfunc(a,b){
    return a+b;
}
console.log(Nfunc(3,5));

//Anonymous function
let f = function(a,b){
    return a+b;
}
console.log(f(5,7));


// immediate invoke
let func = function(a,b){
    return a+b;
}(2,3)

console.log(func);

// Arrow function
let fun = ((a,b)=>{
    return a+b;
}) 
console.log(fun(2,5));
