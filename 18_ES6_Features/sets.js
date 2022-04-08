const nameArray = ['ryu', 'chun-li', 'shaun', 'ryu'] //duplicate name 'ryu'
console.log(nameArray) // [ 'ryu', 'chun-li', 'shaun', 'ryu' ]

const nameSet = new Set(nameArray)
console.log(nameSet) // Set(3) { 'ryu', 'chun-li', 'shaun' }

const uniqueNames = [...new Set(nameArray)]
console.log(uniqueNames) // [ 'ryu', 'chun-li', 'shaun' ]

const ages = new Set()
ages.add(20)
ages.add(25).add(30)
ages.add(25)
ages.delete(25)

console.log(ages, ages.size) // Set(2) { 20, 30 } 2
console.log(ages.has(30), ages.has(25)) // true false

const players = new Set([
    { name: 'shaun', age: 24 },
    { name: 'crystal', age: 28 },
    { name: 'chun-li', age: 30 }
])

players.forEach(player => {
    console.log(player.name, player.age)
})
/*
shaun 24
crystal 28
chun-li 30
 */