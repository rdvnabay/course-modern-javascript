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

    getChats(callback) {
        this.chats
        .where('room','==',this.room)
        .orderBy('created_at')
        .onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if (change.type === 'added')
                    callback(change.doc.data())
            })
        })
    }
}

const chatroom = new Chatroom("general", "rıdvan")

chatroom.getChats(data=>{
    console.log(data)
})

