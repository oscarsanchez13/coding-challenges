/*
Description:

Write a function that takes an integer as input, and returns 
the number of bits that are equal to one in the binary 
representation of that number. You can guarantee that input 
is non-negative.

Example: The binary representation of 1234 is 10011010010, 
so the function should return 5 in this case
*/

// Solution 1
var countBits = function(n) {
    let num = n.toString(2);
    let arr = String(num);
    let bit = 0;
    for(let i=0; i<arr.length; i++){
      bit+= Number(arr[i]);
    };
    return bit;
};

// Solution 2 (removes 0's, returns length of remaining 1's)
var countBits = function(n) {
    return n.toString(2).split('0').join("").length;
};