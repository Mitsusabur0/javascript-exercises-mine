const fibonacci = function(index) {
    if (index < 0) {
        return("OOPS");
    }
    let fibList = [1, 1];
    for (let i = 0; i < index - 2; i++) {
        let nextNum = fibList[fibList.length - 1] + fibList[fibList.length - 2];
        fibList.push(nextNum);
    }
    // console.log(fibList[fibList.length - 1]);
    return(fibList[fibList.length - 1]);
};

// fibonacci(4);

// Do not edit below this line
module.exports = fibonacci;


/*
argument is position in fibonacci numbers list

get the fibonacci number from given position
*/


