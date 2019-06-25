function luckCheck(str) {
    
    if (str === "" || /^[A-Za-z]+$/.test(str) ) {
        console.log("Error");  
    } else {
        let strMiddle = str.length / 2;
        let lefthalf = str.slice(0, Math.floor(strMiddle));
        let righthalf = str.slice(Math.ceil(strMiddle));
        console.log(sumAdd(lefthalf) === sumAdd(righthalf));
    }
}   

function sumAdd(str) {
    let n = 0;
    str.split('').forEach(num => {
        n += +num;
    })
    return n;
}

luckCheck("abcdef");
luckCheck('003111')
luckCheck('123321')
luckCheck('123456')