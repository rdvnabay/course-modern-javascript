const button = document.querySelector('button')
button.addEventListener('click', () => {
    console.log('button clicked')
})

const todoList = document.querySelectorAll('li')
todoList.forEach(item => {
    item.addEventListener('click', (e) => {
        console.log(item)
        console.log(e.target)

        item.style.textDecoration = 'line-through'
        e.target.style.textDecoration = 'line-through'
    })
})
