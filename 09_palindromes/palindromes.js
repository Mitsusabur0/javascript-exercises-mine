const palindromes = function(string) {
    let onlyLetters = string.replace(/[^\p{L}\p{N}]/giu, "");
    onlyLetters = onlyLetters.split("").reverse().join("");
    return onlyLetters.toLowerCase() === string.replace(/[^\p{L}\p{N}]/giu, "").toLowerCase();

};


// Do not edit below this line
module.exports = palindromes;




/*
call function with string as argument

get only letters from string

new_string = reverse argument_string 

compare both strings

return true or false

*/