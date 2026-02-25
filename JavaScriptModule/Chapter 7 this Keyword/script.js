// alert("Hello world");


// let calculator = {
//     num1: -1,
//     num2: -1,
//     read(){
//         this.num1 = parseInt(prompt("Enter num1"))
//         this.num2 = parseInt(prompt("Enter num2"))
//     },
//     sum(){
//         return this.num1 + this.num2;
//     },
//     multiply(){
//         return this.num1 * this.num2;
//     }
// }

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.multiply());


// Implement calc

// calc = 0


const calc = {
    val: 0,
    add(num){
        this.val += num;
        return this;
    },
    subtract(num){
        this.val -= num;
        return this;
    },
    divide(num){
        this.val /= num;
        return this;
    },
    multiply(num){
        this.val *= num;
        return this;
    },
    result(){
        let output = this.val;
        this.val = 0;
        console.log(output);
    }
}

calc.result();
calc.add(1).multiply(5).multiply(5).divide(2).subtract(2).result();



