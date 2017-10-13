console.log('starting the app');

setTimeout(()=>{
console.log('Inside of callback');
},2000);  //since node.js is non-blocking it runs the next commands waiting asyncronously for this call to complete

setTimeout(() => {
    console.log('Setting the call back to 0ms')
},0);
console.log('Finishing up');