// Task 1
const para = document.querySelector(".para");
const btn = document.querySelector(".btn");

btn.addEventListener('click',()=>{
    para.style.color = "red";
})

// Task 2
const btnImg = document.querySelector(".imgBtn");
const img = document.querySelector(".img");
btnImg.addEventListener('click', ()=>{
 img.classList.toggle("hidden")
 
})


// Task 3
para.addEventListener('mouseover', ()=>{
    para.style.backgroundColor = "yellow";
})

// Task 4
para.addEventListener('mouseout', ()=>{
    para.style.backgroundColor = "white";
})

// Task 5
const input = document.querySelector(".input");
input.addEventListener('keydown',(e)=>{
    console.log(e.target.value)
})

// Task 6
const input2 = document.querySelector(".input2");
input2.addEventListener('keyup',()=>{
    input2.value = input2.value.toUpperCase();
})

// Task 7
const form = document.querySelector(".form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(name.value);
    console.log(email.value);
})

// Task 8
const language = document.querySelector("#language");
const paragraph = document.querySelector(".para2");
language.addEventListener('change',(e)=>{
   paragraph.textContent = e.currentTarget.value;
})

// Task 9
const list = document.querySelector(".list");
list.addEventListener('click',(e)=>{
    console.log(e.target.textContent)
})

// Task 10

const addBtn = document.querySelector(".addListbtn");
addBtn.addEventListener('click',()=>{
    const listItem = document.createElement('li');
    listItem.textContent = `list item ${list.children.length + 1}`
    list.appendChild(listItem);
})