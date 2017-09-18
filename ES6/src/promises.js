"use strict"

//Immediately resolved

var myPromise = Promise.resolve('Foo');

myPromise.then((res) => console.log(res));


var myPromise = new Promise(function(resolve,reject){
    setTimeout(()=> resolve(4),2000);
});

myPromise.then((res) => {
    res +=3;
    console.log(res);
    
});


/////Promise to fetch dada from api

function getData(method,url){
    return new Promise(function(resolve,reject){
        var xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.onload = function(){
            if(this.status >= 200 && this.status <300){
                resolve(xhr.response);
            }else{
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function(){
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
}

getData('GET','https://jsonplaceholder.typicode.com/posts').then(function(data){
    let todos = JSON.parse(data);
    let out =  '';
    for(let todo of todos){
        out += `
        <li>
<h3>${todo.title}</h3>
<p>Completed: ${todo.completed}</p>
</li>
        
        `;
    }
    document.getElementById('template').innerHTML = out
    console.log(data);
}).catch(function(err){
    console.log(err);
})