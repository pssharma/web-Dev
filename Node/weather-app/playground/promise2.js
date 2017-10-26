const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve,reject) => {
        var adrss = encodeURIComponent(address);
        request({
            url: `http://maps.googleapis.com/maps/api/geocode/json?address=${adrss}`,
            json: true
        },(error,response,body)=>{
            if(error){
                reject('Unable to connect to google servers.');
                }else if(body.status =='ZERO_RESULTS'){
               reject('Unable to handle the address');
               
            }else if(body.status =='OK'){
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                })
                
            }
        })
    })

};

geocodeAddress('').then((location) => {
 console.log(JSON.stringify(location,undefined,2));
}, (errorMessage) =>{
    console.log(errorMessage);
})