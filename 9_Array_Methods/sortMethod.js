//sorting strings
const users = ['mario', 'shaun', 'chun-li', 'crystal']
console.log(users.sort()) // [ 'chun-li', 'crystal', 'mario', 'shaun' ]
console.log(users.reverse()) // [ 'shaun', 'mario', 'crystal', 'chun-li' ]

//sorting numbers
const scores = [10, 50, 20, 45, 70, 5]
console.log(scores.sort()) //[ 10, 20, 45, 5, 50, 70 ] #wrong sorting 
console.log(scores.sort((a, b) => a - b)) // [ 5, 10, 20, 45, 50, 70 ] //correct
console.log(scores.sort((a, b) => b - a)) // [ 70, 50, 45, 20, 10, 5 ] //correct


//sorting objects
const players = [
    { name: 'mario', score: 30 },
    { name: 'chun-li', score: 60 },
    { name: 'shaun', score: 10 },
    { name: 'crystal', score: 20 },
]


// players.sort((a, b) => {
//     if (a.score > b.score)
//         return -1
//     else if (a.score < b.score)
//         return 1
//     else
//         return 0
// })

//shorthand
players.sort((a, b) => b.score - a.score)

console.log(players)
// [
//     { name: 'chun-li', score: 60 },
//     { name: 'mario', score: 30 },
//     { name: 'crystal', score: 20 },
//     { name: 'shaun', score: 10 }
// ]
