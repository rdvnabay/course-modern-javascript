fetch('data/todos.json').then(response => {
    return response.json()
}).then(data => {
    console.log(data)
})
