// alert("Hello world!");


// const multiplyNumeric = (obj) => {
//     if (typeof obj !== 'object') return;
//     for (let key in obj){
//         if (typeof obj[key] === 'number') obj[key] *= 2;
//     }
// }

// const obj = {
//     age: 18,
//     score: 45,
//     title: "My params",
// }

// multiplyNumeric(obj);
// console.log(obj);

const a = {};
const b = {key: 1};
const c = {key: 2};

// let bclone = Object.assign()
a[b] = 123;
for (let key in a){
    console.log(key, "type: ", typeof key);
}
a[c] = 345;
for (let key in a){
    console.log(key, "type: ", typeof key);
}


console.log(a[b]);
console.log(a);
console.log(b);
console.log(c);

for (let key in a){
    console.log(key, "type: ", typeof key);
}