const body = document.querySelector('body')

const styleBody = () => {
    body.style.background = "orange"
}

const addTitle=text=>{
    const title=document.createElement('h1')
    title.textContent=`hello ${text}`
    body.appendChild(title)
}

const contact="mario.net"

export {
    styleBody,
    addTitle,
    contact
}