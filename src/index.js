document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.body.append()
});

let form = document.getElementById('create-task-form')
let input = form.querySelector('input')
let submit = document.querySelectorAll('form')[1]
let ul = document.getElementById('tasks')
let li = document.createElement('li')
let btn = document.createElement('button')
btn.innerHTML = 'X'
li.appendChild(btn)
