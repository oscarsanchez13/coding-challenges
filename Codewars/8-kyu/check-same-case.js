/*
Description:

Write a function that will check if two given characters are the 
same case.

If any of characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters and not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1
*/

// Solution 1
function sameCase(a, b){
    if((a.replace(/[^a-zA-Z]/g, '1') == a.toUpperCase() && b.replace(/[^a-zA-Z]/g, '1') == b.toUpperCase()) ||
     (a.replace(/[^a-zA-Z]/g, '1') == a.toLowerCase() && b.replace(/[^a-zA-Z]/g, '1') == b.toLowerCase())) {
        return 1;
    } else if ((a.replace(/[^a-zA-Z]/g, '1') == a.toUpperCase() && b.replace(/[^a-zA-Z]/g, '1') == b.toLowerCase()) ||
    (a.replace(/[^a-zA-Z]/g, '1') == a.toLowerCase() && b.replace(/[^a-zA-Z]/g, '1') == b.toUpperCase())) {
        return 0;
    } else {
        return -1;
    }
  }

// Solution 2
function sameCase(a, b){
    if (/[a-zA-Z]/.test(a) === false || /[a-zA-Z]/.test(b) === false) return -1;
    if ((a === a.toUpperCase() && b !== b.toUpperCase()) || (a !== a.toUpperCase() && b === b.toUpperCase())) return 0;
    return 1;
  }