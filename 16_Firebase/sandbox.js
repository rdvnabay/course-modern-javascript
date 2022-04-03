const ul = document.querySelector('ul')

const addRecipe = (recipe) => {
    const time=recipe.created_at.toDate()
    const html = `
    <li>
         <div>${recipe.title}</div>
         <div>${time}</div>
    </li>`

    ul.innerHTML+=html
}


db.collection('recipes').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        addRecipe(doc.data())
    })
}).then(err => {
    console.log(err)
})

