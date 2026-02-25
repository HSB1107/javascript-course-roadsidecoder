// alert("Hello world!");

// Q: Solve promises recursively


function promRecurse(funcPromises){
    if(!Array.isArray(funcPromises) || funcPromises.length === 0) return;

    let currPromise = funcPromises.shift(); 
    currPromise.then((res) => console.log(res).catch((error) => console.error(error)));
    promRecurse(funcPromises);
}


// Q: Promise polyfill

function promisePolyfill(executor) {
    // .then, .resolve, .reject, 
    let onResolve, 
    onReject,
    isFulfilled = false,
    isRejected = false,
    isCalled = false,
    value;

    console.log("Inside promisePolyfill constructor");
    function resolve(val) {
        console.log("Now actually calling the resolve method of executor for", val);
        isFulfilled = true;
        value = val;
        if (typeof onResolve === 'function' && !isCalled){
            onResolve(val);
            isCalled = true;
        }
        
    }

    function reject(val) {
        console.error("Now actually calling the reject method of executor for", val);
        isRejected = true;
        value = val;
        if (typeof onReject === 'function' && !isCalled){
            onReject(val);
            isCalled = true;
        }
    }

    this.then = function(callback){
        console.log("Received callback for .then", callback);
        console.log("[isFullfilled, isCalled]:[" + isFulfilled + ", " + isCalled + "]");
        onResolve = callback;
        if (isFulfilled && !isCalled){
            isCalled = true;
            console.log("SYNCHRONOUS code case");
            onResolve(value);
        }
        return this;
    }

    this.catch = function (callback) {
        console.log("Received callback for .catch", callback);
        console.log("[isRejected, isCalled]:[" + isRejected + ", " + isCalled + "]");
        onReject = callback;
        if (isRejected && !isCalled){
            isCalled = true;
            console.error("SYNCHRONOUS code case");
            onReject(value);
        }
        return this;
    }

    try {
        executor(resolve, reject);
    } catch (error) {
        reject(error);
    }
}

const promise1 = new promisePolyfill((resolve, reject) => {
    setTimeout(()=>{
        console.log("------------------------------------");
        resolve("HSB");
        reject(2);
        resolve("hi");
        reject("REJ");
        resolve({a: 1});
        reject("REJ again");
    }, 1000);
});

promise1.then((res) =>{
    console.log(res);
}).catch((err) =>{
    console.error(err);
}).then((res) => {
    console.log("Another round", res);
}).catch((err) =>{
    console.error("Another error:", err);
});

// console.log(promise1.then);
// console.log(promise1.catch)