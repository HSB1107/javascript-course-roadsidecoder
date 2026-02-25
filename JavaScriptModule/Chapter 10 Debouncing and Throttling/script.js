// alert("Hello world");

// Debouncing and Throttling in Javascript

// Ques 1 - Create a button UI and add debounce as follows=>
    //  --> Show "Button Pressed <X> Times" every time button is pressed
//      --> Increase "Triggered <Y> Times after every 800ms of debounce"


let btn = document.querySelector("#btn");
let x = document.querySelector("#x-indicator");
let y = document.querySelector("#y-indicator");
let z = document.querySelector("#z-indicator");
let clickCount = 0, triggerCount = 0, throttledCount = 0;

const debounce = (fn, delay) => {
    let timer;

    // fn1
    return function(...args){
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    } 
}

const throttle = (fn, delay) => {
    let lastCalled = 0;

    return function(...args){
        const now = Date.now();
        if (now - lastCalled < delay) return;
        lastCalled = now;
        fn.apply(this, args);
    }
}

function robustThrottle(fn, delay) {
    let lastCalled = 0;
    let timer = null;

    return function (...args) {
        const now = Date.now();
        const remaining = delay - (now - lastCalled);
        if (remaining <= 0){
            if (timer){
                clearTimeout(timer);
                timer = null;
            }
            lastCalled = now;
            fn.apply(this, args);
        } else if (!timer){
            timer = setTimeout(()=>{
                lastCalled = Date.now();
                timer = null;
                fn.apply(this, args);
            }, remaining);
        }
    }
}
 
function updateX(){
    clickCount++;
    x.textContent = `Clicked ${clickCount} times`;
}
function updateY(){
    console.log("triggered debounced click");
    triggerCount++;
    y.textContent = `Triggered debounced version ${triggerCount} times`;
}

function updateZ(){
    console.log("triggered throttled click");
    throttledCount++;
    z.textContent = `Triggered throttled version ${throttledCount} times`;
}

const deboundedUpdateY = debounce(updateY, 300);
// const throttledUpdateZ = throttle(updateZ, 800);
const throttledUpdateZ = robustThrottle(updateZ, 800);

function handleClick (_event){
    // console.log("clicked");
    updateX();
    deboundedUpdateY();
    throttledUpdateZ();
}

btn.addEventListener("click", handleClick);
