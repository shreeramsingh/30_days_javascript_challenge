// Activity 1: Arithmetic Operations
// Task 1: Write a program to add two numbers and log the result to the console.
  const Add=(a,b)=>{
    return a+b;
  }
  console.log("Addition:",Add(2,5));
// Task 2: Write a program to subtract two numbers and log the result to the console.
const Sub=(a,b)=>{
  return a-b;
}
console.log("Subtraction:",Sub(5,7));
// Task 3: Write a program to multiply two numbers and log the result to the console.
const Mul=(a,b)=>{
  return a*b;
}
console.log("Multiplicatiom:",Mul(3,5))
// Task 4: Write a program to divide two numbers and log the result to the console. 
const div=(a,b)=>{
  return a/b;
}   
console.log("Division:",div(10,2));
// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
const rem=(a,b)=>{
  return a%b;
}  
console.log("Remainder:",rem(11,10));
// Activity 2: Assignment Operators
// Task 6: Use the += operator to add a number to a variable and log the result to the console.
let a=6;
a+=1;
console.log("Assignment +=",a);
// Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
a=10
a-=1;
console.log("Assignment -=",a);
// Activity 3: Comparison Operators
// Task 8: Write a program to compare two numbers using > and < and log the result to the console.
const comparefun=(a,b)=>{
  return a>b;
}
console.log("Comprasion >:",comparefun(5,6));

const comparefun1=(a,b)=>{
  return a<b;
}
console.log("Comprasion <:",comparefun1(5,6));
// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
const comparefunEqual=(a,b)=>{
  return a>=b;
}
console.log("Comprasion >=",comparefunEqual(5,6));

const comparefunEqual1=(a,b)=>{
  return a<=b
}
console.log("Comprasion <=",comparefunEqual1(5,6));
// Task 10: Write a program to compare two numbers using == and === and log the result to the console.
let a1=10;
let b1=10;
console.log("Compare ==:",a1==b1);
console.log("Compare ===:",a1===b1);

// Activity 4: Logical Operators
// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
let operatorA=5,operatorB=6
console.log("operator && :",operatorA<6 && operatorB>5 )

// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
let operator1=5,operator2=6
console.log("operator ||:",operator1>6 ||operator2<5 )
// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
let neg=10
console.log("negative !:",!neg);

// Activity 5: Ternary Operator
// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
let ter1=10;
console.log("ternary operator :",ter1%2==0?"even":"odd");
ter1=11
console.log("ternary operator :",ter1%2==0?"even":"odd");