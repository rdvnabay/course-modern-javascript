//AccuWeather api
const apiKey = 'V4jk2tOAClICDiQxnMYq4XRyQy2SZeqa'

const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${apiKey}&q=${city}`

    const response = await fetch(base + query)
    const data = await response.json()
    return data
}

getCity('istanbul')
    .then(data => console.log(data))
    .catch(err => console.log(err))