var createCounter = function(init) {
    var incr = init;
    
    return function increment(){
        return ++incr;
    } 

    return function decrement(){
        return --incr;
    }
    
    return function reset(){
        return incr = incr;
    }
};


// let coun = createCounter(6);


console.log(createCounter(7).increment());
