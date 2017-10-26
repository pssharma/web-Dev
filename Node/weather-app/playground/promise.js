var asyncAdd = (a,b) => {
 return new Promise((resolve,reject)=>{
    setTimeout(() =>{
        if(typeof(a) === 'number' && typeof(b)==='number'){
            resolve(a+b);
        }else{
            reject('arguments are not numbers');
        }

    },1500);
 });
};
asyncAdd(5, 7).then((res) =>{
    console.log('Result', res);
    return asyncAdd(res, 33);
 
}).then((res2) => {
    console.log('Result:', res2);
}).catch((errorMessage) =>{
    console.log(errorMessage);
});

/* var somePromise = new Promise((resolve, reject) =>{
    setTimeout(()=>{
       // resolve('hey, it works');
       reject('didnt work');
    },2500)
    });
   

somePromise.then((message) =>{
    console.log('Success: ,', message);
}, (errorMessage) => {
  console.log('Error: ',errorMessage);
}); */
