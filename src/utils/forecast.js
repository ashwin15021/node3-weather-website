const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=8fee20f916d5e937bf015c42e3cabb71&query=' + latitude + ',' + longitude + '&units=f'
    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to the server', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is ' + body.current.temperature + ' degrees outside. It feels like ' + body.current.feelslike)
        }
    })
}

module.exports = forecast