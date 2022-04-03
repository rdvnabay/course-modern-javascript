class Chatroom {
    constructor(room, user) {
        this.room = room
        this.user = user
        this.chats = db.collection('chats')
    }
    async addChat(message) {
        const now = new Date()
        const chat = {
            message,
            room: this.room,
            user: this.user,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        }

        const response = await this.chats.add(chat)
        return response
    }
}

const chatroom = new Chatroom("general", "rıdvan")
chatroom.addChat("hi everyone")
    .then(() => console.log('message send'))
    .catch(err => console.log('message failed'))

