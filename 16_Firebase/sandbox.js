const ul = document.querySelector('ul')
const form = document.querySelector('form')

const getRecipes = () => {
    db.collection('recipes').get()
        .then(snapshot => snapshot.docs.forEach(doc => addRecipe(doc.data())))
        .catch(err => console.log(err))
}

const saveToDb = (recipe) => {
    db.collection('recipes').add(recipe)
        .then(() => console.log('recipe added'))
        .catch(err => console.log(err))
}

const addRecipe = (recipe) => {
    const time = recipe.created_at.toDate()
    const html = `
    <li>
         <div>${recipe.title}</div>
         <div>${time}</div>
    </li>`

    ul.innerHTML += html
}

form.addEventListener('submit', e => {
    e.preventDefault()

    const now = new Date()
    const title = form.recipe.value

    const recipe = {
        title: title,
        created_at: firebase.firestore.Timestamp.fromDate(now)
    }

    saveToDb(recipe)
})

getRecipes()

