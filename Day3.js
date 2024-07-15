// Day 3: Control Structures
// Tasks/Activities:
// Activity 1: If-Else Statements
// •	Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
const checkNumber = (num) => {
  if (num == 0) {
    console.log("Zero");
  } else if (num > 0) {
    console.log("Positive");
  } else {
    console.log("Negative");
  }
};
checkNumber(-2);
// •	Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
const voteCheck = (age) => {
  if (age >= 18) {
    console.log("Eligible");
  } else {
    console.log("Below 18 Not eligible");
  }
};
voteCheck(18);
// Activity 2: Nested If-Else Statements
// •	Task 3: Write a program to find the largest of three numbers using nested if-else statements.
const largestAmongthree = (a, b, c) => {
  let largeNum;
  if (a > b) {
    if (a > c) {
      largeNum = a;
    }
  } else if (b > a) {
    if (b > c) {
      largeNum = b;
    }
  } else {
    largeNum = c;
  }
  return `Large number among three ${largeNum}`;
};
console.log(largestAmongthree(5, 11, 0));

// Activity 3: Switch Case
// •	Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
const checkDay = (num1to7) => {
  let day;
  switch (num1to7) {
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thrusday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    case 7:
      day = "Sunday";
      break;
    default:
      day = "Invalid Number";
      break;
  }
  return day;
};
console.log(checkDay(3));
// •	Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

const checkGrade = (gradeAtoF) => {
  let grade;
  switch (gradeAtoF) {
    case "A":
      grade = `Outstanding`;
      break;
    case "B":
      grade = `Excellent`;
      break;
    case "C":
      grade = `Very Good`;
      break;
    case "D":
      grade = `Good`;
      break;
    case "E":
      grade = `Average`;
      break;
    case "F":
      grade = `Fail`;
      break;
    default:
      grade = "Invalid character";
      break;
  }
  return grade;
};
console.log(checkGrade("B"));
// Activity 4: Conditional (Ternary) Operator
// •	Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

const checkEo = ((n) => (n % 2 == 0 ? "Even" : "Odd"));
console.log(checkEo(4));

// Activity 5: Combining Conditions
// •	Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
const checkLeafYear =((year)=>{
  if (year % 100 === 0) {
    console.log(`This ${year} is not a leap year`);
  } else if (year % 400 === 0) {
    console.log(`This ${year} is a leap year`);
  } else if (year % 4 === 0) {
    console.log(`This ${year} is a leap year`);
  } else {
    console.log(`This ${year} is not a leap year`);
  }
})
checkLeafYear(2023);