let age = 25

if (true) {
    let age = 30
    const name = 'shaun'
    console.log('inside 1st code block:', age, name) //30,'shaun'
}

if (true) {
    let age = 50
    var result = 'test'
    console.log('insde 2nd code block:', age, result) //50,'test'
}

console.log('outside code block: ', age, result) //25,'test'