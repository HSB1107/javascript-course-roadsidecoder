// Array.map((num, index, arr) => {});

// Array.prototype.map()

// Array.prototype.reduce(((prevVal, currVal, currIndex, arr) => {}), initialVal);
Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let index = 0; index < this.length; index++) {
    if (cb(this[index], index, this)) {
      temp.push(this[index]);
    }
  }
  return temp;
};

Array.prototype.myReduce = function (cb, initialVal) {
  // cb -> (prevVal, currVal, currIndex, arr);
  if (this.length === 0) {
    if (initialVal === undefined) {
      throw Error("No initialVal provided for the empty array");
    }
    return initialVal;
  }
  let result = initialVal;
  let startIndex = 0;
  if (result === undefined) {
    result = this[0];
    startIndex = 1;
  }
  for (let index = startIndex; index < this.length; index++) {
    result = cb(result, this[index], index, this);
  }
  return result;
};

const a = [1, 2, 3, 4, 5, 6];

console.log(a.myMap((num) => num * 2));
console.log(a.myFilter((num) => num % 2));
console.log(a.myReduce((acc, curr) => acc + curr, 1000));

const students = [
  {
    name: "Amit",
    rollNumber: 101,
    marks: 85
  },
  {
    name: "Sneha",
    rollNumber: 102,
    marks: 92
  },
  {
    name: "Rahul",
    rollNumber: 103,
    marks: 78
  },
  {
    name: "Priya",
    rollNumber: 104,
    marks: 88
  }
];

const studentNamesCaps = students.map((student) => student.name.toUpperCase());
const scoringStudents = students.filter((stu) => stu.marks > 85).map(stu=>stu.name);
console.log(studentNamesCaps);
console.log(scoringStudents);

