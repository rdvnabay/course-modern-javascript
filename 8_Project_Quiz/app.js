const correctAnswer = ["B", "B", "B", "B"]
const result = document.querySelector('.result')

const form = document.querySelector('.quiz-form')
form.addEventListener('submit', e => {
    e.preventDefault()

    let score = 0
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswer[index])
            score += 25
    })

    scrollTo(0,0)
    result.querySelector('span').textContent = `${score}%`
    result.classList.remove('d-none')
    //result
})
console.log(form)


//global object window
console.log('console')
window.console.log('window console')

alert('alert')
window.alert('window alert')

setTimeout(() => {
    console.log('setTimeout')
}, 2000);

window.setTimeout(() => {
    window.console.log('window setTimeout')
}, 2000)