document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById('create-task-form')
  let input = form.querySelector('input')
  let submit = document.querySelectorAll('form')[1]
  let ul = document.getElementById('tasks')
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.innerHTML = 'X'
  li.appendChild(btn)

  submit.addEventListener('click', function(e){
    btn.setAttribute('data-description', `${input.value}`)
    ul.appendChild(li)
  })
});
