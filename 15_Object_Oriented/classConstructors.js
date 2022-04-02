class User{
    constructor(name,email){
        this.name=name
        this.email=email
    }
}

const userOne=new User('ridvan','ridvan@mail.com')
const userTwo=new User('ramazan','ramazan@mail.com')

console.log(userOne,userTwo)

//the 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructor function to 'build' the object