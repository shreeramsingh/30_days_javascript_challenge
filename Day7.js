// Object Creation and Access

// Task 1: Create an object representing aa book with properties like title, author and year and log the obj
const book={
  title:"Physic",
  author:"HC Verma",
  year:"1999"
}
console.log(book);
// Task 2: Access and log the title and author properties of the book object
console.log(book.author,book.title);

// Object Methods

// Task 3: Add a method to the book object that returns a string with the book's title and author and log the result
book.getBookProps = ()=>{
  return `Title => ${book.title} and author =>${book.author}`
}
console.log(book.getBookProps());
// Task 4: Add a method to the book object that takes a parameter (year) and updates the book"s year property and then log the result
book.updateBookYear = (updatedYear) => {
  if (book.year !== updatedYear) book.year = updatedYear;
}

const year = 2001;
book.updateBookYear(year);

console.log(`The updated book object is: `);
console.log(book);

// Nested Objects
// Task 5: Create a nested object of library with properties like name and book and log the result

const books={
  title:"Physic",
  author:"HC Verma",
  year:"1999",
  library:{
    name:"AEC Library",
    LibBook:["Harry potter","DSA","Database","operating system"]
  }
}
console.log(books.library)
const lib=books.library;
console.log(lib.name,lib.LibBook);
// Task 6: Access and log the libaray and the titles of all the books in library

books.library.LibBook.map((e)=>console.log(e))


// The "this" keyword

// Task 7: Add a method to the book object that uses the this leyword to retuen a string
//with the books title and year, and log the res
const book = {
  title: "English Literature",
  author: "William Shakespeare",
  year: 1600
};

book.getBookProps = function () {
  return `Book Title: ${this.title} and Year: ${this.year}`;
}

console.log(book.getBookProps());  

// Object Iteration

// Task 8: Use a "for..in" loop to iterate over the properties of the book object and log each properties and its value

const bookNew = {
  title: "Geography",
  author: "The Hindu",
  year: 2005
};

for (let b in bookNew) {
  console.log(`The property is ${b} and it's corresponding value is ${book[b]}`);
}
// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object

const keys = Object.keys(bookNew);
const values = Object.values(bookNew) 

console.log(keys); 
console.log(values);