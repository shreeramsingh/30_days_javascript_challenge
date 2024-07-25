export const add =((a,b)=>{
  return a+b;
})

export const obj = {
  name: 'shreeRam',
  age: 21,
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

export const exports =((a,b)=>{
   return (a*b);
})

// 4 Create a script that fetches data from a public API using both promises and async/await, and logs the response data.

// export const fetching=(async ()=>{

// fetch("https://api.github.com/users/hiteshchoudhary")
// .then(function(response){
//   return response.json()
// })
// .then(function(data){
//   console.log(data)
// })
// .catch(function(error){
//   console.log(error)
// })


// async function get_user (){
// try {
//   let user = await fetch("https://api.github.com/users/hiteshchoudhary")
//   let data = await user.json()
//   console.log(data)
// }catch(e){
//   console.log(e);
// }
// }
//await get_user()
//)}

