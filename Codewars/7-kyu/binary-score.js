/*
Description:

Objective
Given a number n we will define its scORe to be 
0 | 1 | 2 | 3 | ... | n, where | is the bitwise OR operator.

Write a function that takes n and finds it's scORe.

n	scORe n
0	0
1	1
49	63
1000000	1048575
*/

// Solution 1
function score(n){
    return n > 0 ? parseInt(n.toString(2).replace(/0/g, 1), 2) : 0;
}

// Solution 2
function score(n){
    let i = 1;
    
    while (i < n) {
      n |= i;
      i = i << 1;
    }
    
    return n;
}

// Solution 3
function score(n){
    let i = 1;
    while (i <= n) {
      i *= 2;
    }
    return i - 1;
}