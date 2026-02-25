
const addFive = (num) => num + 5;
const subtractTwo = (num) => num - 2;
const multiplyFour = (num) => num * 4;

const evaluate = compose(addFive, subtractTwo, multiplyFour);
console.log(evaluate);
console.log(evaluate(5))


// function compose(...fn) {
//     console.log(fn);
//     return function (...args) {
//         if (fn.length === 1){
//             return fn[0].call(this, ...args);
//         };
//         const last = fn.pop();
//         return compose(...fn)(last(...args));
//     }
// }



        // let result = init;
        // for (let i = fns.length - 1; i >= 0; i--) {
        //     result = fns[i](result);
        // }
        // return result;
        
function compose(...fns) {
    return function (init) {

        return fns.reduceRight((acc, curr)=>{
            return curr(acc);
        }, init)
    }
}
