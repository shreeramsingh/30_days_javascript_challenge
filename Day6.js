//Day 6: Arrays

// Activity 1: Array Creation and Access
// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
let a=[1,3,5,7,9];
console.log(a);
//Task 2: Access the first and last elements of the array and log them to the console.
let first=a[0];
let last=a[a.length-1]
console.log(first,last);
//Activity 2: Array Methods (Basic)
// Task 3: Use the push method to add a new number to the end of the array and log the updated array.
let operation=[1];
operation.push(7);
operation.push(5);
console.log(operation);
//Task 4: Use the pop method to remove the last element from the array and log the updated array.
operation.pop()
console.log(operation);
//Task 5: Use the shift method to remove the first element from the array and log the updated array.
operation.shift()
console.log(operation);
//Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
operation.unshift(9)
console.log(operation);
//Activity 3: Array Methods (Intermediate)
//Task 7: Use the map method to create a new array where each number is doubled and log the new array.
a.map((element)=>console.log(element*2));
//Task 8: Use the filter method to create a new array with only even numbers and log the new array.
let arrEvenOdd=[1,4,6,5,9,8]
const Even=arrEvenOdd.filter((even)=>even%2==0);
console.log(Even)
//Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
let inital=0
const sum=a.reduce((acc,curr)=>acc+curr,inital)
console.log(`Total sum ${sum}`);
//Activity 4: Array Iteration
//Task 10: Use a for loop to iterate over the array and log each element to the console.
for(let i=0;i<a.length;i++) console.log(a[i]);
//Task 11: Use the forEach method to iterate over the array and log each element to the console.
a.forEach((ele)=>console.log(ele));
//Activity 5: Multi-dimensional Arrays
//Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
const twoDimensionarray=[
  [9,8,7],
  [6,5,4],
  [3,2,1]
]
console.log(twoDimensionarray)

//Task 13: Access and log a specific element from the two-dimensional array.
let specifiNumber=6;
for(let i=0;i<twoDimensionarray.length;i++)
{
  for(let j=0;j<twoDimensionarray[i].length;j++){
    //console.log(`checking size ${twoDimensionarray[i].length}`)
    if(twoDimensionarray[i][j]==specifiNumber){
      console.log(`specifiNumber is ${twoDimensionarray[i][j]}`);
      break;
    }
  }
}