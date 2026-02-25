// Once polyfill

function once (func, context){
    let ran;
    return function () {
        if (func){
            ran = func.apply(context || this, arguments);
            func = null;
        }
        return ran;
    }
}





// Memoize polyfill

function memoize(func, context) {
    let _argMap = new Map();

    return function () {
        let argumentsArr = [...arguments];
        console.log("argumentsArr",argumentsArr)
        let argumentsKey = argumentsArr.reduce(((prevVal, currVal) => prevVal + "," + currVal), ":");
        console.log("argumentsKey",argumentsKey);
        if (!_argMap.has(argumentsKey)){
            _argMap.set(argumentsKey, func.apply(context || this, arguments));
        }
        return _argMap.get(argumentsKey);
    }
}

const clumsySquare = (num1, num2) => {
  for (let i = 0; i < 10000000; i++) {
    if (i%2000000 === 0) console.log("Complex work");
  }

  return num1*num2;
};

console.time("First call");
console.log(clumsySquare(9467, 8369));
console.timeEnd("First call");

console.time("Second call");
console.log(clumsySquare(9467, 8369));
console.timeEnd("Second call");

const memoizedClumsySquare = memoize(clumsySquare);

console.time("Memoized First call");
console.log(memoizedClumsySquare(9467, 8369));
console.timeEnd("Memoized First call");

console.time("Memoized Second call");
console.log(memoizedClumsySquare(9467, 8369));
console.timeEnd("Memoized Second call");

console.time("Memoized Third call");
console.log(memoizedClumsySquare(94679, 8369));
console.timeEnd("Memoized Third call");

console.time("Memoized Fourth call");
console.log(memoizedClumsySquare(94679, 8369));
console.timeEnd("Memoized Fourth call");