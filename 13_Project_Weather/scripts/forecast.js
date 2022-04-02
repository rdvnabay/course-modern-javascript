class Forecast {
    apiKey = 'V4jk2tOAClICDiQxnMYq4XRyQy2SZeqa'
    cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/'

    async getCity(city) {
        const query = `?apikey=${this.apiKey}&q=${city}`
        const response = await fetch(this.cityURI + query)
        const data = await response.json()
        return data[0]
    }

    async getWeather(locationKey) {
        const query = `${locationKey}?apikey=${this.apiKey}`
        const response = await fetch(this.weatherURI + query)
        const data = await response.json()
        return data[0]
    }

    async updateCity(city) {
        const cityDetail = await this.getCity(city)
        const weather = await this.getWeather(cityDetail.Key)
        return { cityDetail, weather }
    }
}

