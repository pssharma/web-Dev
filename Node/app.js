//console.log('Hello world!');
const request = require('request');

request({
    url: 'http://maps.googleapis.com/maps/api/geocode/json?address=123%20main%20street%20new%20york',
    json: true
},(error,response,body)=>{
    console.log(body);
})