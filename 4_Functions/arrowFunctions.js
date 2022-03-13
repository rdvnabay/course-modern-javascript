//regular function
// const calcArea = function (radius) {
//     return 3.14 * radius ** 2
// }

//arrow function 
const calcArea = radius => 3.14 * radius ** 2

const result = calcArea(5)
console.log(result)

//Example:2
//regular function
// const bill = function (products, tax) {
//     let total = 0

//     for (let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax
//     }
//     return total
// }

//arrow function
const bill = (products, tax) => {
    let total = 0
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax
    }
    return total
}

console.log(bill([10, 15, 30], 0.2))

