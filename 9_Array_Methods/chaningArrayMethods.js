const products = [
    { name: 'gold star', price: 30 },
    { name: 'green shell', price: 20 },
    { name: 'red shell', price: 50 },
    { name: 'mushroom', price: 10 },
]

const filtered = products.filter(p => p.price > 20)
const promos = filtered.map(p => {
    return `the ${p.name} is ${p.price / 2} pounds`
})

console.log(promos)
// [ 'the gold star is 15 pounds', 'the red shell is 25 pounds' ]


//method chaning 
const result = products
    .filter(p => p.price > 20)
    .map(p => `the ${p.name} is ${p.price / 2} pounds`)

console.log(result)
    // [ 'the gold star is 15 pounds', 'the red shell is 25 pounds' ]