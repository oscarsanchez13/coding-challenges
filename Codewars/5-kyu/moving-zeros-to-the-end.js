/*
Description:

Write an algorithm that takes an array and moves all of the 
zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) 
^returns[false,1,1,2,1,3,"a",0,0]
*/

// Solution 1 (Accessing all values in an array)
function moveZeros(arr) {
    let noZeros = arr.filter(x => x !== 0);
    let zeros = arr.filter(x => x === 0);
    return [...noZeros, ...zeros];
}

// Solution 1 Shortened
let moveZeros = (arr) => {
    return [...(arr.filter(x => x !== 0)), ...(arr.filter(x => x === 0))];
}

// Solution 2 (Using Concat method)
function moveZeros(arr) {
    let noZeros = arr.filter(x => x !== 0);
    let zeros = arr.filter(x => x === 0);
    return noZeros.concat(zeros);
}

// Solution 2 Shortened
let moveZeros = (arr) => {
    return arr.filter(x => x !== 0).concat(arr.filter(x => x === 0));
}