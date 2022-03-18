const username = 'shaun'
const pattern = /^[a-z]{6,}$/

let result = pattern.test(username)
console.log(result)
if (result)
    console.log('regex test passed')
else
    console.log('regex test failed')


let result2 = username.search(pattern)
console.log(result2)

