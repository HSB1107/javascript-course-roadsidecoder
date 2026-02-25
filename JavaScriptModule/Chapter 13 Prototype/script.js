// // alert("Hello");

function add(a) {
    return a;
}
console.log(add.prototype)
console.log(add.prototype === add.__proto__)

console.log(add.__proto__)
console.log(Function.__proto__)
console.log(Function.prototype)

console.log(add.__proto__ === Function.__proto__)
console.log(Function.__proto__ === Function.prototype)
// console.log(function.__proto__) // Won't compile

// const canvas = document.querySelector("#board");
// const ctx = canvas.getContext("2d");

// canvas.width = canvas.offsetWidth;
// canvas.height = canvas.offsetHeight;

// ctx.lineWidth = 3;
// ctx.lineCap = "round";
// ctx.strokeStyle = "black";

// let drawing = false;

// function getPos(e) {
//     const rect = canvas.getBoundingClientRect();
//     return {
//         x: e.clientX - rect.left,
//         y: e.clientY = rect.top
//     }
// }

// canvas.addEventListener("mousedown", (e) => {
//     drawing = true;
//     const {x, y} = getPos(e);
//     ctx.beginPath();
//     ctx.moveTo(x, y);
// });

// canvas.addEventListener("mousemove", (e) => {
//     if (!drawing) return;
//     const {x, y} = getPos(e);
//     ctx.lineTo(x, y);
//     ctx.stroke();
// })

// canvas.addEventListener("mouseup", () => {
//     drawing = false;
//     ctx.closePath();
// })

// canvas.addEventListener("mouseleave", () => {
//     drawing = false;
// })


// // Prototype Chaining

// let person = {
//     name: "HSB",
//     age: 23,
//     toString: (p1, p2, p3, p4)=>{
//         console.log("Converts to string and returns 5");
//         return 5;
//     }
// }

// let additional = {
//     username: "Hrishikesh",
//     alias(){
//         console.log(`${this.name} is also known as ${this.username}`);
//     }
// }

// person.__proto__ = additional;
// console.log(person.alias());

// Prototype Inheritance
// new keyword, constructor

// Constructor function
function Animal(name) {
    console.log("Called the Animal constructor for the name " + name);
    this.name = name;
}



// console.log(Animal.prototype)
Animal.prototype.sayName = function () {
    console.log("My name is " + this.name);
}

// What does new keyword do?
// --> It sets the constructor function's prototype to the as the prototype of the newly created object
// var animal = new Animal("Tiger");


// Extending the base class (function)

function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
    console.log("Woof!");
}
 var dog1 = new Dog("Max", "Labro");


 // What is the difference between __proto__ and prototype
 /**
  * __proto__ is the object property, something that is called on the objects / instances of the object
  *  It is used for inheritance, and allows accessing prototype chaining
  *  
  * 
  * prototype is the property that exists on the constructor functions, 
  * Used to setup the inheritance for the objects created by the constructor function
  *  
  */

 // What is setPrototypeOf
 /**
  *  
  */

 // define a prototype object

 var animalPrototype = {
    method: function () {
        console.log("This is simply a method function")
    }
 }

 var dog2 = Object.create(animalPrototype);

 var cat = {
    purr: function () {
        console.log("purrring...")
    }
 }

 Object.setPrototypeOf(dog2, cat);

//  dog1 instanceof Animal

// How to create an object without a prototype in Javascript
var obj1 = Object.create(null);


// Deep clone an object in Javascript
/**
 *  IN BUILD: structuredClone
 */

const source = {
    a: 1,
    b: [1, 2, 3]
}

function deepClone(source){
    if (source === null || typeof source !== "object"){
        return source; // OR possibly throw an error
    }
    var clone = Array.isArray(source) ? [] : {};
    for (var key in source){
        if (source.hasOwnProperty(key)){
            clone[key] = deepClone(source[key]);
        }
    }
    return clone;
}

const clone1 = structuredClone(source);
