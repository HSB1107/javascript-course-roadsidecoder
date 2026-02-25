// // alert("Hello world!");

// const obj = {name: "HSB"};

// function greet(age, profession) {
//     return "Hello " + this.name + " is " + age + " and is a " + profession;
// }

// const func = () => {
//     let a = 0, b = 0;
//     let z1 = a++ + b++;
//     console.log(a, b, z1);    
//     let z2 = a++ + ++b;
//     console.log(a, b, z2); 
//     let z3 = ++a + b++;
//     console.log(a, b, z3); 
//     let z4 = ++a + ++b;
//     console.log(a, b, z4); 
// }

// func();

// console.log(greet.call(obj, 23, "software engineer"));
// // console.log(greet.apply(obj, 23, "software engineer")); // createListFromArrayLike called on non object
// console.log(greet.apply(obj, [23, "software engineer"]));
// const bindFunc = greet.bind(obj);
// console.log(bindFunc(23, "software engineer"));

const age = 10;

"use strict";

function add(a, b, c) {
    console.log("Inside v1");
    
    return a + b + c;
}

function add(a, b) {
    console.log("Inside v2");
    
    return a + b;
}

console.log(add(1, 2));
console.log(add(1, 2, 3));

// Function.prototype.call()  //[thisArg, ...argArray]

// .call method polyfill


Function.prototype.myCall = function(thisArg, ...argArray){
    if (typeof this !== "function"){
        throw new Error(this, " is NOT callable");
    }
    thisArg.fn = this;
    thisArg.fn(...argArray);
}

function purchaseCar(currency, price) {
    console.log(`I've have purchased ${this.color} - ${this.company} car for ${currency} ${price}`)
}

function sellCar(currency, price) {
        console.log(`I've have sold ${this.color} - ${this.company} car for ${currency} ${price}`)
}
const car = {
    color: "red",
    company: "Ferrari"
}

purchaseCar.myCall(car, "$", 450000)
sellCar.myCall(car, "$", 400000)
console.log(car);