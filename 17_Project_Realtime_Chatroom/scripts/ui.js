class ChatUI {
    constructor(list) {
        this.list = list
    }

    render(data) {
        const html = `
        <li class="list-group-item">
            <span class="user">${data.user}</span> 
            <span class="message">${data.message}</span>
            <div class="time">${data.created_at.toDate()}</div>
        </li>
        `

        this.list.innerHTML += html
    }
}