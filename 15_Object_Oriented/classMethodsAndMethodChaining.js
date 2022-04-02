class User {
    constructor(name, email) {
        this.name = name
        this.email = email
        this.score = 0
    }
    logIn() {
        console.log(`${this.name} just logged in`)
        return this
    }
    logOut() {
        console.log(`${this.name} just logged out`)
        return this
    }
    incScore() {
        this.score++
        console.log(`${this.name} has a score of ${this.score}`)
        return this
    }
}

//Inheritance
class Admin extends User {
    deleteUser(user) {
        users = users.filter(u => u.name !== user.name)
    }
}


const userOne = new User('ridvan', 'ridvan@mail.com')
const userTwo = new User('mert', 'mert@mail.com')
const userThree = new Admin('recep', 'recep@mail.com')

//method chaining
userOne.logIn().incScore().incScore().incScore().logOut()

//user list
let users = [userOne, userTwo, userThree]
userThree.deleteUser(userOne)
console.log(users)