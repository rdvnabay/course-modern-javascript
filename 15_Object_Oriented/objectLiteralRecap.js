//object literal
const userOne = {
    user: 'ridvan',
    email: 'ridvan@mail.com',
    logIn() {
        console.log('logged in')
    },
    logOut() {
        console.log('logged out')
    }
}

console.log(userOne.user, userOne.email)
userOne.logIn()


const userTwo = {
    user: 'oktay',
    email: 'oktay@mail.com',
    logIn() {
        console.log('logged in')
    },
    logOut() {
        console.log('logged out')
    }
}

console.log(userTwo.user, userTwo.email)
userTwo.logIn()

//
const userThree = new User('berkan', 'berkan@mail.com')