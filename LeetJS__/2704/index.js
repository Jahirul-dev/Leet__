var expect = function(val) {
    const Obj = {
        toBe(valOne){
            if(val === valOne){
                return true;
            }else
            return "Not Equal"
        },
        notToBe(valtwo){
            if(val !== valtwo){
                return true
            }
            else
            return "Equal"
        }
    } 
    return Obj;
};

expect(5).notToBe(5)
console.log(expect(5).notToBe(5)
);
// var expect = function(val) {
//     const Obj = {
//         toBe(valOne){
//             if(val === valOne){
//                 return true;
//             }else
//             throw new Error("Not Equal")
//         },
//         notToBe(valtwo){
//             if(val !== valtwo){
//                 return true
//             }
//             else
//             throw new Error("Equal")
//         }
//     } 
//     return Obj;
// };