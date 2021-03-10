const promise = new Promise((resolve, reject) => { 
    setTimeout(() => {
        // resolve('This is resolved data');
        reject('Something\'s up');
    }, 1500);
});

console.log('BEFORE');

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log('error', error);
});

console.log('AFTER');