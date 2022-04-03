const ul = document.querySelector('ul')
const form = document.querySelector('form')

const getRecipes = () => {
    db.collection('recipes').get()
        .then(snapshot => snapshot.docs.forEach(doc => addRecipeToHtml(doc.data(), doc.id)))
        .catch(err => console.log(err))
}

const saveToDb = (recipe) => {
    db.collection('recipes').add(recipe)
        .then(() => console.log('recipe added'))
        .catch(err => console.log(err))
}

const deleteToDb = (id) => {
    db.collection('recipes').doc(id).delete()
        .then(console.log('deleted'))
        .catch(err => console.log(err))
}

const addRecipeToHtml = (recipe, id) => {
    const time = recipe.created_at.toDate()
    const html = `
    <li data-id=${id}>
         <div>${recipe.title}</div>
         <div>${time}</div>
         <button class="btn btn-danger">Delete</button>
    </li>`

    ul.innerHTML += html
}

const removeRecipeToHtml = (id) => {
    const recipes = document.querySelectorAll('li')
    recipes.forEach(recipe => {
        if (recipe.getAttribute('data-id') === id)
            recipe.remove()
    })
}

form.addEventListener('submit', e => {
    e.preventDefault()

    const now = new Date()
    const title = form.recipe.value

    const recipe = {
        title: title,
        created_at: firebase.firestore.Timestamp.fromDate(now)
    }
    form.reset()
    saveToDb(recipe)
})

ul.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        const id = e.target.parentElement.getAttribute('data-id')
        deleteToDb(id)
    }
})

getRecipes()

db.collection('recipes').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
        const doc = change.doc
        if (change.type === 'added')
            addRecipeToHtml(doc.data(), doc.id)
        else if (change.type === 'removed')
            removeRecipeToHtml(doc.id)
    })
})

