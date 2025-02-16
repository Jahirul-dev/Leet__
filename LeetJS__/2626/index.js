var reduce = function(nums, fn, init) {
    let val = init;
    
    for(i = 0; i<nums.length; i++){
        if (nums.length == 0){
            return init;
        }else
        val = fn(val, nums[i])
    }
    return val;
};