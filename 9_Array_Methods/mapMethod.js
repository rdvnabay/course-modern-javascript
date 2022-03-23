const prices = [20, 10, 30, 15, 40, 20, 50]

const salePrices = prices.map(price => price / 2)

//product instance #1
const products = [
    { name: 'gold star', price: 20 },
    { name: 'mushroom', price: 40 },
    { name: 'green shells', price: 10 },
    { name: 'red shells', price: 30 },
]

//saleProducts instance #2
const saleProducts = products.map(product => {
    if (product.price >= 30)
        return { name: product.name, price: product.price / 2 }
    else
        return product
})

console.log(products)
console.log(saleProducts)


products.map(product => {
    if (product.price >= 30) {
        product.price /= 2
        return product
    }
    else
        return product
})
console.log(products)