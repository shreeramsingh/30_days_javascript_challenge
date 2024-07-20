// Day 8: ES6+ Features

// Tasks/Activities:
// Activity 1: Template Literals

// . Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
let namePerson="Shree ram",age=23
let templetLitreal=`Hi, I am ${namePerson} ans my age is ${age}`;
console.log(templetLitreal);
// . Task 2: Create a multi-line string using template literals and log it to the console.
const multilineString = `
This is a multiline string.
It spans multiple lines.
You can include variables like this: ${new Date().toLocaleDateString()}.
Template literals make it easy to create formatted text.
`;
// Activity 2: Destructuring

// . Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
console.log(multilineString);

let destructure=[5,7,9,13];
let [c,d]=destructure;
console.log(c);
console.log(d);
// . Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

const book={
  title:"Two state",
  author:"chetan bhagat",
  year:2000
}
let {title,author}=book;
console.log(title);
console.log(author);
// Activity 3: Spread and Rest Operators

// . Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to
// the console.
const existingArray=[1,7,9];
const additionalNumber=8
const newArray=[...existingArray,additionalNumber]
console.log(newArray)
// . Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3)); // 6
// Activity 4: Default Parameters

// . Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of
// calling this function with and without the second parameter.
const product=((a,b=1)=>{
  return a*b;
})
console.log(product(5,11));
console.log(product(5));

// Activity 5: Enhanced Object Literals

// . Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const  a = "Chai";
const b = "Code";
function greet(){
    return this.a + this.b
}

const channel ={ a, b, greet};
console.log(channel);
console.log(channel.greet());

// . Task 9: Create an object with computed property names based on variables and log the object to the console.

// note: To use computed values for property names, you use square brackets and pass the expression.

// Variables to be used as property names
const propName1 = 'firstName';
const propName2 = 'lastName';
const propName3 = 'age';

// Creating an object with computed property names
const person5 = {
  [propName1]: 'priya',
  [propName2]: 'Dey',
  [propName3]: 30
};

// Logging the object to the console
console.log(person5);