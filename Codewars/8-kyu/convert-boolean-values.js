/*
Description:

Complete the method that takes a boolean value and return 
a "Yes" string for true, or a "No" string for false.
*/

// Solution 1
function boolToWord( bool ){
    return bool ? 'Yes' : 'No';
}

// Solution 2
let boolToWord = bool => bool ? 'Yes' : 'No';