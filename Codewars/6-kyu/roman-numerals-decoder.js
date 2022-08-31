/*
Description:

Create a function that takes a Roman numeral as its argument 
and returns its value as a numeric decimal integer. You don't 
need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal 
digit of the number to be encoded separately, starting with 
the leftmost digit and skipping any 0s. So 1990 is rendered 
"MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered 
"MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, 
"MDCLXVI", uses each letter in descending order.

Example:

solution('XXI'); // should return 21
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
*/

// Solution 1
function solution (roman) {
    const conversion = {"M":1000, "D":500, "C":100, "L":50, "X":10, "V": 5, "I":1}
    
    const array = roman.split('');
    let total = 0;
    let current;
    let currentValue;
    let next;
    let nextValue;
    
    for(let i = 0; i < array.length; i++){
      current = array[i];
      currentValue = conversion[current]
      
      next = array[i+1];
      nextValue = conversion[next]
      
      if(currentValue < nextValue){
        total -= (currentValue);
      } else {
        total += (currentValue);
      }
    }
    
    return total;
}

// Solution 1 Refactored
function solution (roman) {
    const conversion = {"M":1000, "D":500, "C":100, "L":50, "X":10, "V": 5, "I":1}
    
    const array = roman.split('');
    let total = 0;
    let current, currentValue, next, nextValue;
    
    for(let i = 0; i < array.length; i++){
      current = array[i];
      currentValue = conversion[current]
      
      next = array[i+1];
      nextValue = conversion[next]
      
      currentValue < nextValue ? total -= currentValue : total += currentValue;
    }
    
    return total;
}