const ul=document.querySelector('ul')
const button = document.querySelector('button')

button.addEventListener('click', () => {
    ul.innerHTML+='<li>new todo added</li>'

    const li=document.createElement('li')
    li.textContent='new todo added'
    ul.append(li)
    ul.prepend(li)
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
