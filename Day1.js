//Activity 1: Variable Declaration
//Task 1: Declare a variable using var , assign it a number ,and log the value to the console.

var num=108;
console.log(num);

//Task 2: Declare a variable using let , assign it a string ,and log the value to the console.

var name="Shree Ram Singh";
console.log(name);

//Activity 2: constant Declaration

//Task 3: Declare a variable using const , assign it a boolean ,and log the value to the console.

const istoggel=true;
console.log(istoggel)

// Activity3: Data Types

// Task4: Create variables of diffrent data types (number, string, boolean, object, array) add
//     log each variables's type using "typeof" operator.

const number=10
const bool=true
const string_name="abhiram"
const obj_technology={
    "technology i use":["html",'css','tailwind','javascript','reactjs','nodejs','express','mongodb','sql'],
}

const role=['frontend','backend','fullstack','ui/ux',];


console.log(typeof(number))
console.log(typeof(bool))
console.log(typeof(string_name))
console.log(typeof(obj_technology))
console.log(typeof(role))

// Activity4: Reassigning Variable

// Task5: Declare a variable using let, assign it an initial value, reassign a new value,
// and log values to the console.

let myNum=105;
console.log(myNum);
//reassigining value
myNum=108
console.log(myNum);

// Activity5: Understanding const

// Task5: Try reassigning a variable declare with const and observe the error.
const str="shri"
str="ranjit"
console.log(str) //TypeError: Assignment to constant variable.