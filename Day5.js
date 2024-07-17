// Day 5: Functions
//Activity 1: Functions Declaration
// Task 1: Write a function to check if a number is even or odd and log the result to the console.
const checkEvenOdd=((num)=>{
  return (num%2==0)?"Even":"Odd";
})
console.log(checkEvenOdd(5))
//Task 2: Write a function to calculate the square of a number and return the result.
const square=((num)=>{
  return num*num;
})
console.log(square(5))
//Activity 2: Functions Expression
//Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

const maxTwo=((a,b)=>{
  return (a>b)?`${a} is maxnum`:`${b} is maxnum`;
})
console.log(maxTwo(5,7));
//Task 4: Write a function expression to concatenate two strings and return the result.
const concateTwoString=((s1,s2)=>{
  return s1+' '+s2;
})
console.log(concateTwoString("shreeram","singh"));
//Activity 3: Arrow Functions
//Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const addTwonum =((a,b)=> a+b);
console.log(addTwonum(5,3));
//Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const searchChar =((s,character)=>{
  return s.includes(character);
})
console.log(searchChar("shreeram","r"));
//Activity 4: Function Parameters and Default Values
//Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
const product=((a,b=7)=>{
  return a*b;
})
console.log(product(5));
//Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
const greeting=((name,age=18)=>{
  return `Hello ${name} my age is ${age}`;
})
console.log(greeting("Ram",21))
// Activity 5: Higher Order Functions
//Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
const sum=((a,b)=>{
  console.log(a+b)
});
let higherOrder = (func, num) => {
  for (let i = 1; i <= num; i++) {
    func(i, i); // Calling func with two arguments
  }
};
higherOrder(sum,5);
//Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
let higherOrderFunc = (func1, func2, value) => {
  return func2(func1(value));
};

let func1 = (num) => {
  return num * 5;
};

let func2 = (num) => {
  return num * num;
};
console.log(higherOrderFunc(func1, func2, 5));