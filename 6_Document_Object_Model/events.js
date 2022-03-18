const copy = document.querySelector('.copy-me')
copy.addEventListener('copy', () => {
    console.log('this content is copyright')
})

const box = document.querySelector('.box')
box.addEventListener('mousemove', (e) => {
    console.log(e) //Mouse Event
    box.textContent = `x pos - ${e.offsetX} y pos - ${e.offsetY}`
})

document.addEventListener('wheel',(e)=>{
    console.log(e) //WheelEvent
    console.log(e.pageX, e.pageY)
})