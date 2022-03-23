const scores = [10, 15, 25, 30, 40, 50]

const filteredScores = scores.filter(score => {
    return score > 20
})

console.log(scores)
console.log(filteredScores)


const users = [
    { name: 'shaun', premium: true },
    { name: 'yoshi', premium: false },
    { name: 'mario', premium: false },
    { name: 'chun-li', premium: true },
]

const premiumUser = users.filter(user => user.premium)
console.log(premiumUser)