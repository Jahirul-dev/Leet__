// function createHelloWorld(){
//     function f(){
//         return "Hello World"
//     }
//     return f;
// }

// var createHelloWorld = function(){
//     return function f(){
//         return "Hello World"
//     }
// }

var createHelloWorld = function(){
    return function f(...args){
        return "Hello World"
    }
}