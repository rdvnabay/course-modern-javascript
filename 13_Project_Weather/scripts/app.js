const form = document.querySelector('.change-location')
const card = document.querySelector('.card')
const details = document.querySelector('.details')

form.addEventListener('submit', e => {
    e.preventDefault()

    const city = form.city.value.trim()
    form.reset()

    //request
    updateCity(city).then(data => updateUI(data))


})

const updateCity = async (city) => {
    const cityDetail = await getCity(city)
    const weather = await getWeather(cityDetail.Key)

    return { cityDetail, weather }
}


const updateUI = (data) => {
    const { cityDetail, weather } = data

    details.innerHTML = `
    <h5 class="my-3">${cityDetail.LocalizedName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
`

    if (card.classList.contains('d-none'))
        card.classList.remove('d-none')
}