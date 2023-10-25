const repeatString = function(str, num) {
    if (num < 0)  {
        return("ERROR");
    }
    let  stringReturned = "";
    for (let  i = 0; i < num; i++) {
        stringReturned +=  str;
    };
    return(stringReturned)

};
















// Do not edit below this line
module.exports = repeatString;
