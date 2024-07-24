//Task 1 - Write a function that intentionally thrwos an error and use a try-catch block to handle the error and lov an appropriate message to the console
function sum(num1, num2){
  if(typeof(num1) != 'number' || typeof(num2) !== 'number'){
      throw new Error("Only number are allowed");
  }
  return num1 + num2;
}
function sumWithHandleError(a, b){
  try {
      sum(a, b);
  } catch (error) {
      console.log("Error: " +  error.message);
  }
}
sumWithHandleError(2, "1");
//Task 2 Create a function that divides two numbers and throws an error if the denominato is zero. Use try-catch block to handle this error
const trycatch =((num,dem)=>{
    let divnum;
    try {
      divnum=(num/dem);
    } catch (error) {
      return "error";
    }
    return divnum;
})
console.log(trycatch(15,5));
//Task 3 - Write a script that includes a try-catch block and a finally block. Log the messages in the try catch and finally blocks to observe the execution flow.

const blockSum=(()=>{
    try {
      console.log("Inside try Block: Attempting risky operation");
        throw new Error('something went wrong!'); //Commenting this line it will not throw any error and jumps directly to finally
        console.log("Completed the operation");
    } catch (error) {
      console.log("Inside catch block", error.message);
    }
    finally{
      console.log("Executed Finally Block");
    }
})
blockSum();
//Task 4 - Create a custom error class that extends the built-in Error class. Throw ans instance of this custom error in a function and handle it using a try-catch block.
class customError extends Error{
  constructor(message){
      super(message);
      this.name = 'CustomError';
  }
}
function riskyOper(){
  throw new Error("This is the message for custom error");
}
function handleRiskyOper(){
  try {
      riskyOper();
  } catch (error) {
      console.log('error ', error.message);
  }finally{
      console.log("Execution completed")
  }
}

handleRiskyOper();

//Task 5 - wirte a fucntion that validates user input (e.g. checking if a string is not empty)  and throws a custom error if the validations fails. Handle the custom error using try-catch

const Input=((str)=>{
    if(str.length===0){
      throw new customError("String length cannot be empty");
    }
    console.log(str);
})
function output(str){
    try {
      takeInput(str);
  } catch (error) {
      console.log(error.name);
      console.log(error.message);
  }
}
output("");

const promise1 = new Promise((_,reject)=>{
  reject(new Error('Promise rejected'));
})
promise1.catch((error) => {
  console.error(error.message);
});

//Task 6 Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log the an appropriate message
const p = new Promise((resolve, reject) =>{
  const randomValue = Math.round(Math.random() * 10);
  setTimeout(() => {
      if(randomValue<5){
          resolve("Promsise resolved");
      }else{
          reject(new Error("Promise reject"));
      }
  }, 1000)
}) 

p.
then((data) => {
  console.log(data);
})
.catch((error) => {
  console.error(error.message);
});

//Task 7 Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

async function getData(){
  try {
      const data = await p;
      console.log(data);
  } catch (error) {
      console.log(error.name);
      console.log(error.message);
  }finally{
      console.log("Finally Block exucted");
  }
}

getData();
//Task 8 - Use fetch API to request data from an invalid URL and hanlde the error using .catch(). Log an appropriate error message to the console

fetch("http://fsdkfdsjfsd.co")
.then(res => {
  if(!res.ok){
    throw  new Error("Cannot fetch this url");
  }
})
.catch(error => console.log("operation failed " + error.message));


// Task 9- Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate errro messge
async function fetchData(){
  try {
    const data = await fetch('https://fsdsweriowersfssv.com');
    console.log(data);
  } catch (error) {
    console.log("operation failed " + error.message);
  }
}
fetchData();