//AccuWeather api
const apiKey = 'V4jk2tOAClICDiQxnMYq4XRyQy2SZeqa'

const getWeather = async (locationKey) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${locationKey}?apikey=${apiKey}`

    const response = await fetch(base + query)
    const data = await response.json()
    return data[0]
}


const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${apiKey}&q=${city}`

    const response = await fetch(base + query)
    const data = await response.json()
    return data[0]
}

// getCity('istanbul')
//     .then(data => getWeather(data.Key))
//     .then(data => console.log(data))