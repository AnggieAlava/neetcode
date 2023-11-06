const nemo = ['nemo']
function findNemo(array) {
    let t0  = performance.now();
    for(let i = 0; i < array.length; i++) {
        if(array[i] === 'nemo') {
            console.log('Found NEMO');
        }
    }
    let t1 = performance.now();
    console.log('Call to findNemo took' + (t1 + t0) + 'milisenconds')
}

findNemo(nemo)