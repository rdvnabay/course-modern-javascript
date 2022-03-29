const getTodos = async (url) => {
    const response = await fetch(url)
    if (response.status !== 200)
        throw new Error('bad request url')

    const data = await response.json()
    return data
}

getTodos('data/todos.json')
    .then(data => getTodos('data/category.json'))
    .then(data => console.log(data))
    .catch(err => console.log(err.message))