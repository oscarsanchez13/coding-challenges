/*
Description:

Move the first letter of each word to the end of it, then add 
"ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str){
    //Code here
}

// Solution 1
function pigIt(str){
    let strArr = str.split(' ');
    let pigLatin = [];
  
    for(let word of strArr){
      if((/([a-zA-Z])/).test(word)){
        pigLatin.push(word.substring(1) + word[0] + "ay");
      }else{
        pigLatin.push(word);
      }
    }
    return pigLatin.join(" ");
}

// Solution 2 (It doesnt work with puctuation)
function pigIt(str){
    let arr = str.split(' ');
    let newStr = [];
    for(let i=0; i<arr.length; i++){
      let word = arr[i];
      let newWord = `${word.substring(1)}${word[0]}ay`;
      newStr.push(newWord);
    }
    return newStr.join(' ');
}

// Solution 3 (RegExp)
function pigIt(str){
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}