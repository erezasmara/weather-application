const request_ = require('request') // npm i request@version


const GetGeocode = (city,callback) =>{
    var url_ = 'http://api.weatherstack.com/current?access_key=a448ffd9d4aa1eb72e188e9c59ea23e3&query='+ city
 
    request_({url:url_,json:true},(error,{body}={})=>{ 
 
        if(error){
            callback('unable to connect to server try later',undefined)
        }else if(body.error){
            callback('unable to make the request, check parameters and try again.',undefined)
        }else{
            callback(undefined,{
                                long:body.location.lon,
                                lat:body.location.lat,
                                location:body.location.country
                                })
        }

    })

} 

const GetForecast =  (latitude,longitude,callback) => {

    var url_ = 'http://api.weatherstack.com/current?access_key=a448ffd9d4aa1eb72e188e9c59ea23e3&query='+ latitude +','+ longitude
    
    request_({url:url_,json:true},(error,{body}) => { //make the destruction

        if(error){
        callback('Unable to connect to server!.',undefined)
        }else if(body.error){
        callback('Something goes wrong, check parameters and try again!',undefined)
        }else{
        callback(undefined, {
           forecast: body.location.country + ' ' + body.location.name + ','+' the correct forecast weather is ' + body.current.weather_descriptions[0]+' with ' + body.current.temperature +' degrees.',
           forecastImage: body.current.weather_icons[0]   
        })
        }

    })

}

module.exports = {
    GetGeocode :GetGeocode,
    GetForecast:GetForecast
}