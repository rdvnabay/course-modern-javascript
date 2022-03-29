const getTodos = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    return data
}

getTodos('data/todos.json')
    .then(data => getTodos('data/category.json'))
    .then(data => console.log(data))
    .catch(err => console.log(err))