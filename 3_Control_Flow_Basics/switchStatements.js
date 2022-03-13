const grade = 50

switch (grade) {
    case '50': //strict equality 50==='50' (not equal)
        console.log('you got an A!')
        break
    case 'B':
        console.log('you got an B!')
        break
    case 'C':
        console.log('you got an C!')
        break
    case 'D':
        console.log('you got an D!')
        break
    case 'E':
        console.log('you got an E!')
        break
    default:
        console.log('not a valid grade')

}