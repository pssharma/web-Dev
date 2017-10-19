const request = require('request');

var geocodeAddress = (address, callback) =>{
var adrss = encodeURIComponent(address);
request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${adrss}`,
    json: true
},(error,response,body)=>{
    if(error){
        callback('Unable to connect to the google servers');
        

    }else if(body.status =='ZERO_RESULTS'){
        callback('Unable to handle the address');
       
    }else if(body.status =='OK'){
        callback(undefined, {
            address: body.results[0].formatted_address,
            latitude: body.results[0].geometry.location.lat,
            longitude: body.results[0].geometry.location.lng
        })
        
    }
})
};

module.exports= {
    geocodeAddress
    };