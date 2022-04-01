const form = document.querySelector('.change-location')
const card = document.querySelector('.card')
const details = document.querySelector('.details')
const time = document.querySelector('img.time')
const icon = document.querySelector('.icon img')


form.addEventListener('submit', e => {
    e.preventDefault()

    const city = form.city.value.trim()
    form.reset()

    //request
    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err))

    //set local storage
    localStorage.setItem('city', city)
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

    //update the night/day & icon images
    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg'
    time.setAttribute('src', timeSrc)

    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`
    icon.setAttribute('src', iconSrc)

    if (card.classList.contains('d-none'))
        card.classList.remove('d-none')
}

if (localStorage.getItem('city')){
    updateCity(localStorage.getItem('city'))
    .then(data => updateUI(data))
    .catch(err => console.log(err))
}