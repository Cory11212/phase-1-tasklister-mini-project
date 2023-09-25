document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    addTodo(e.target.querySelector('#new-task-description').value)
  })
});

function addTodo(todo){
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', deleteTodo)
  btn.textContent = 'x'
  li.innerText = `${todo} `
  li.append(btn)
  document.querySelector('#tasks').append(li)
}

function deleteTodo(e){
  e.target.parentNode.remove()
}
