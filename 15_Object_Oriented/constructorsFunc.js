function User(name, email) {
    this.name = name
    this.email = email
}

User.prototype.logIn=function(){
    console.log(`${this.name} has logged in`)
    return this
}

User.prototype.logOut=function(){
    console.log(`${this.name} has logged out`)
    return this
}

const userOne = new User('fikret', 'fikret@mail.com')
const userTwo = new User('anıl', 'anil@mail.com')

console.log(userOne,userTwo)
userOne.logIn().logOut()