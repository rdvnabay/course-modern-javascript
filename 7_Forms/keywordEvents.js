const form = document.querySelector('form')
const pattern = /^[a-zA-Z]{6,12}$/

form.username.addEventListener('keyup', e => {
    console.log(e.target.value, form.username.value) //same result

    if (pattern.test(e.target.value))
        form.username.setAttribute('class', 'success')
    else
        form.username.setAttribute('class', 'error')
})