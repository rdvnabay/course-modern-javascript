const chatList = document.querySelector('.chat-list')
const newChatForm = document.querySelector('.new-chat')
const newNameForm = document.querySelector('.new-name')
const updateMsg = document.querySelector('.update-msg')

newChatForm.addEventListener('submit', e => {
    e.preventDefault();

    const message = newChatForm.message.value.trim()

    chatroom.addChat(message)
        .then(() => newChatForm.reset())
        .catch(err => console.log(err))
})

newNameForm.addEventListener('submit', e => {
    e.preventDefault()

    const newName = newNameForm.name.value.trim()

    chatroom.updateName(newName)
    newNameForm.reset()
    updateMsg.innerText = `Your name was updated to ${newName}`

    setTimeout(() => {
        updateMsg.innerText = ''
    }, 3000)
})

const user = localStorage.user ? localStorage.user : 'rıdvan'

const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom("general", user)

chatroom.getChats(data => chatUI.render(data))

