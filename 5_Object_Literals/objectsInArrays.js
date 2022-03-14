let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@mail.com',
    location: 'berlin',
    blogs: [
        { title: 'why mac & cheese rules', likes: 30 },
        { title: '10 things to make with marmite', likes: 50 }
    ],
    logBlogs() {
        this.blogs.forEach(blog => console.log(blog))
    }
}

user.logBlogs()