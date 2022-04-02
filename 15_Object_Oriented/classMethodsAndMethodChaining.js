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

const userOne = new User('ridvan', 'ridvan@mail.com')
const userTwo = new User('mert', 'mert@mail.com')

console.log(userOne, userTwo)


// userOne.logIn()
// userOne.incScore()
// userOne.incScore()
// userOne.incScore()
// userOne.logOut()

//method chaining
userOne.logIn().incScore().incScore().incScore().logOut()

//result 
/* 
ridvan just logged in
ridvan has a score of 1
ridvan has a score of 2
ridvan has a score of 3
ridvan just logged out
*/