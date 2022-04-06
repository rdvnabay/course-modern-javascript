class ChatUI {
    constructor(list) {
        this.list = list
    }

    render(data) {
        const when = dateFns.distanceInWordsToNow(
            data.created_at.toDate(),
            { addSuffix: true }
        )
        const html = `
        <li class="list-group-item">
            <span class="user">${data.user}</span> 
            <span class="message">${data.message}</span>
            <div class="time">${when}</div>
        </li>
        `

        this.list.innerHTML += html
    }
}