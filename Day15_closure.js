// Activity 1:
// Task 1:
function outer() {
  let chai = 'green'
  function inner() {
      console.log(chai)
  }
  inner()
}
outer()

// Task 2:
function counter() {
  let count = 0
  return {
      increment: function () {
          count++
      },
      getValue: function () {
          return count
      }
  }
}

let counter1 = counter()
counter1.increment()
counter1.increment()
console.log(counter1.getValue())

// Activity 2:
// Task 3:
function createdIdGenerator() {
  let lastId = 0

  return function () {
      lastId += 1
      return lastId
  }
}

const generateId = createdIdGenerator()

console.log(generateId())
console.log(generateId())
console.log(generateId())

// Task 4:
function createGreeter(name) {
  return function () {
      return `Hello ${name}`
  }
}

const greetSuvodeep = createGreeter('Suvodeep')
const greetChai = createGreeter('Chai')


console.log(greetSuvodeep())
console.log(greetChai())

// Activity 3:
// Task 5:
function createLoggingFunctions(n) {
  const functions = [];

  for (let i = 0; i < n; i++) {
      functions.push(function () {
          console.log(i);
      });
  }

  return functions;
}

const logFunctions = createLoggingFunctions(5);

logFunctions[0]();
logFunctions[1]();
logFunctions[2]();
logFunctions[3]();
logFunctions[4]();


// Activity 4:
// Task 6:
const createItemManager = () => {
  let items = [];

  return {
      additem: (item) => {
          items.push(item)
      },
      removeItem: (item) => {
          items = items.filter((i) => i !== item);
      },
      listItem: () => {
          return items
      }
  };
};

const itemManager = createItemManager()

itemManager.additem('apple')
itemManager.additem('mango')
itemManager.additem('ornage')

console.log(itemManager.listItem())

itemManager.removeItem('apple')

console.log(itemManager.listItem())

// Activity 5:
// Task 7:
function memorize(fn){
  const cache = {};

  return function(...args){
      const key = JSON.stringify(args);
      if(cache[key]){
          return cache[key];
      }
      const result = fn(...args);
      cache[key] = result

      return result;
  }
}

const slowFun = (num) => {
  console.log('Computing..')
  return num * num
}

const memorizedFunction = memorize(slowFun)

console.log(memorizedFunction(4))
console.log(memorizedFunction(4))
console.log(memorizedFunction(5))
console.log(memorizedFunction(5))

// Task 8:
function factorial(n){
  if(n === 0 || n === 1){
      return 1;
  }

  return n * factorial(n - 1)
  }

  const memorizedFactorial = memorize(factorial)

console.log(memorizedFactorial(6))
console.log(memorizedFactorial(5))
console.log(memorizedFactorial(7))
console.log(memorizedFactorial(3))