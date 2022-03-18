const form = document.querySelector('.signup-form')
console.log(form)

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(form.username.value)
    console.log('submitted')
})