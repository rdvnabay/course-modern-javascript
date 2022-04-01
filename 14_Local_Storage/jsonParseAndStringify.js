const todos = [
    { name: 'mario', age: 20 },
    { name: 'shaun', age: 25 },
    { name: 'luigi', age: 30 }
]

localStorage.setItem('todos', JSON.stringify(todos))

const getTodos = localStorage.getItem('todos')
console.log(JSON.parse(getTodos))