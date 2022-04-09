const users = [
    { name: 'mario', premium: true },
    { name: 'chun-li', premium: false },
    { name: 'ryu', premium: false },
    { name: 'luigi', premium: true },
]

const getPremiumUsers = (users) => users.filter(x => x.premium)

export {
    getPremiumUsers,
    users as default
}