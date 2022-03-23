const scores = [10, 20, 15, 35, 50, 80, 55]

const result = scores.reduce((acc, score) => {
    if (score > 50)
        acc++
    return acc
}, 0)
console.log(result)


const players = [
    { name: 'mario', score: 50 },
    { name: 'yoshi', score: 20 },
    { name: 'crystal', score: 10 },
    { name: 'mario', score: 30 },
    { name: 'shaun', score: 25 }
]

const totalScore = players.reduce((acc, player) => {
    if (player.name === 'mario')
        acc += player.score

    return acc
}, 0)

console.log(totalScore)