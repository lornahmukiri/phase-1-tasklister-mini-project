document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let form = document.querySelector("form")
  form.addEventListener("submit", (e) =>{
    e.preventDefault()
    buildTodo(e.target.newTask.value)
    form.reset()
  })
});

function buildTodo(todo) {
  const li = document.createElement('li')
  const btn = document.createElement('button')
  btn.textContent = 'x'
  li.textContent = `${todo}`
  li.appendChild(btn)
  document.getElementById('tasks').appendChild(li)

  btn.addEventListener(click, (e) => e.target.parentNode.remove())
}