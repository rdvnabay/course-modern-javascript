function User(name, email) {
    this.name = name
    this.email = email
}

User.prototype.logIn = function () {
    console.log(`${this.name} has logged in`)
    return this
}

User.prototype.logOut = function () {
    console.log(`${this.name} has logged out`)
    return this
}


function Admin(name, email, age) {
    User.call(this, name, email) //super()
    this.age = age
}

Admin.prototype = Object.create(User.prototype) //inheritance

Admin.prototype.deleteUser = function () {
    //...
}


const userOne = new User('fikret', 'fikret@mail.com')
const userTwo = new User('anıl', 'anil@mail.com')
const userThree = new Admin('zafer', 'zafer@mail.com', 27)

console.log(userOne, userTwo,userThree)
userOne.logIn().logOut()