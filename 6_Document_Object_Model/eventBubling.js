const items = document.querySelectorAll('li')

items.forEach(item => {
    item.addEventListener('click', (e) => {
        console.log('li element click')
        e.stopPropagation()
    })
})


const ul = document.querySelector('ul')
ul.addEventListener('click', (e) => {
    console.log('ul element click')
    console.log(e) //PointerEvent
    console.log(e.target) //li
    e.target.remove()
})