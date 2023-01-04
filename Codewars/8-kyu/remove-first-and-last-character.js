/*
Description:

It's pretty straightforward. Your goal is to create a function that 
removes the first and last characters of a string. You're given one 
parameter, the original string. You don't have to worry with strings 
with less than two characters.
*/

// Solution 1
function removeChar(str){
 
    //checks if string is null or less than 2 characters
    if(!str || str.length <= 2) return ''
    
    //transforms the string into an array, facilitates data manipulation
    const newStr =  str.split('')
    
    //remove the last position in the array
    newStr.pop()
    
    //removes the first position in the array
    newStr.shift()
    
    
    return newStr.join('') //returns a string
};

// Solution 2
function removeChar(str) {
    return str.slice(1, -1);
}