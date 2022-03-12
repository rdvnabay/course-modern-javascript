let email = 'ridvanabay@mail.com'

let result = email.indexOf('@') //10

result = email.lastIndexOf('a') //12
result = email.lastIndexOf('id') //1

result = email.slice(2, 3) //d
result = email.substring(2, 5)//d
result = email.substr(2, 3) //dva

result = email.replace('a', 'e') //ridvenabay@mail.com (first character replace)

console.log(result)