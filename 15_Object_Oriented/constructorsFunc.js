function User(name, email) {
    this.name = name
    this.email = email
    this.logIn = function () {
        console.log(`${this.name} has logged in`)
    }
}

const userOne = new User('fikret', 'fikret@mail.com')
const userTwo = new User('anıl', 'anil@mail.com')

console.log(userOne,userTwo)
userOne.logIn()