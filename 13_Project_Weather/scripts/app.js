const form = document.querySelector('.change-location')

form.addEventListener('submit', e => {
    e.preventDefault()

    const city = form.city.value.trim()
    form.reset()

    //request
    updateCity(city).then(data => console.log(data))


})

const updateCity = async (city) => {
    const cityDetail = await getCity(city)
    const weather = await getWeather(cityDetail.Key)

    return { cityDetail, weather }
}