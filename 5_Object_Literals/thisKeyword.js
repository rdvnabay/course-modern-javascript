let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@mail.com',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 things to make with marmite'],
    login: function () {
        console.log('the user logged in')
    },
    logout() {
        console.log('the user logged out')
    },
    logBlogs() {
        console.log('this user has written the following blogs:')
        //this => user (user.blogs)
        this.blogs.forEach(blog => console.log(blog))
    },
    arrowFunc:()=>{
        console.log(this) // != user object
        //this keyword inside arrow function delagate window object
    }
}

user.logBlogs()
user.arrowFunc()
console.log(this) //window object