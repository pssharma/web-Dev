const request = require('request');

var getWeather =(lat,lng,callback)  =>{


request({
    url: `https://api.darksky.net/forecast/4bcc2dcdfa55cf65f7fdaa79983220b6/${lat},${lng}`,
    json: true
},(error,response,body)=>{
    if(error){
        callback('Unable to connect',undefined);
    }else {
       
       callback(undefined,{
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
       });
    }

});

};

module.exports.getWeather = getWeather;