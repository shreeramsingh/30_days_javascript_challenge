//Activity 1: For Loop
// Task 1: Write a program to print numbers from 1 to 10 using a for loop.
for(let i=1;i<=10;i++){
  console.log(i);
}

//Task 2: Write a program to print the multiplication table of 5 using a for loop.
const num=5;
for(let i=1;i<=10;i++){
  console.log(`${num} * ${i} =${num*i}`)
}

// Activity 2: While Loop
//Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let sum=0,i=0;
while(i<=10){
  sum+=i;
  i++;
}
console.log(sum);

//Task 4: Write a program to print numbers from 10 to 1 using a while loop.
let decrement=10;
while(decrement>=1){
  console.log(decrement);
  decrement--;
}

//Activity 3: Do...While Loop
//Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
let doWhileloop=1;
do{
  console.log(doWhileloop);
  doWhileloop++;
}
while(doWhileloop<=5);

//Task 6: Write a program to calculate the factorial of a number using a do...while loop
function factorial(num) {
  let fact = 1;
  let i = num;
  do {
      fact *= i;
      i--;
  } while (i > 0);
  return fact;
}

console.log(factorial(5)); // Output: 120

//Activity 4: Nested Loops
//Task 7: Write a program to print a pattern using nested for loops:
for(let i=1;i<=5;i++)
{
  let row = '';
  for(let j=1;j<=i;j++){
    row+='*';
  }
  console.log(row);
}

//Activity 5: Loop Control Statements
//Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
for(let i=1;i<=10;i++){
  if(i==5) continue;
  console.log(i)
}

//Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

for(let i=1;i<=10;i++){
  if(i==7) break;
  console.log(i)
}