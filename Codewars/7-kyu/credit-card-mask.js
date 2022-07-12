/*
Description:

Usually when you buy something, you're asked whether your 
credit card number, phone number or answer to your most secret 
question is still correct. However, since someone could look 
over your shoulder, you don't want that shown on your screen. 
Instead, we mask it.

Your task is to write a function maskify, which changes all 
but the last four characters into '#'.

Examples
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"

"Skippy" --> "##ippy"

"Nananananananananananananananana Batman!"
-->
"####################################man!"
*/

// Solution 1
function maskify(cc) {
    cc = cc.split("");
    for(var i = 0; i < cc.length - 4; i++){
      cc[i] = "#";
    }  
    cc = cc.join("");
    return cc
}

// Favorite Solution
let maskify = cc => {
    return cc < 4 ? cc : '#'.repeat(cc.length - 4) + cc.substr(-4);
}

// Solution 3
function maskify(cc) {
    return cc.replace(/.(?=....)/g, '#');
}
//or
function maskify(cc) {
    return cc.replace(/.(?=.{4})/g, '#');
}