
function evalaute(op){
    switch (op) {
        case "add":
            return function (num1) {
                return function (num2) {
                    return num1 + num2;
                }
            }
            break;
        case "subtract":
            return function (num1) {
                return function (num2) {
                    return num1 - num2;
                }
            }
            break;
        case "multiply":
            return function (num1) {
                return function (num2) {
                    return num1 * num2;
                }
            }
            break;
        case "divide":
            return function (num1) {
                return function (num2) {
                    return num1 / num2;
                }
            }
            break;
        default:
            console.error("Please provide a valid operation");
            break;
    }
}

console.log(evalaute("add")(1)(2));
console.log(evalaute("subtract")(1)(2));
console.log(evalaute("multiply")(1)(2));
console.log(evalaute("divide")(1)(2));

function sum(a) {
    return function (b) {
        if (b === undefined){
            return a;
        }
        return sum(a + b);
    }
}

console.log(sum(1)(2)(3)(4)(5)());


// implement curry

function curry(func) {
    return function curriedFunction(...args) {
        if (args.length >= func.length){
            return func(...args);
        }
        return function (...next) {
            return curriedFunction(...args, ...next);
        }
    }
}