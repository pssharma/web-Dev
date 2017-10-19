const request = require('request');

var getWeather =()  =>{


request({
    url: `https://api.darksky.net/forecast/4bcc2dcdfa55cf65f7fdaa79983220b6/42.8140012,-73.9814578`,
    json: true
},(error,response,body)=>{
    if(error){
        console.log('Unable to connect');
    }else {
       console.log(body.currently.temperature);
    }

});

};

module.exports.getWeather = getWeather;