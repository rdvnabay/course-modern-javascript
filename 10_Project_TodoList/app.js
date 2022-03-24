const form = document.querySelector('.form')
const ul = document.querySelector('.todos')

const generateTodo = value => {
    const li = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${value}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `

    ul.innerHTML += li
}

form.addEventListener('submit', e => {
    e.preventDefault()
    const todo = form.todo.value.trim()

    if (todo.length) {
        generateTodo(todo)
        form.reset()
    } 
})

ul.addEventListener('click', e => {
    console.log(e.target)
    if (e.target.classList.contains('delete'))
        e.target.parentElement.remove()
})