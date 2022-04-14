/*
Description:

Write a method, that will get an integer array as parameter and 
will process every number from this array.

Return a new array with processing every number of the input-array 
like this:

If the number has an integer square root, take this, otherwise 
square the number.

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
*/

// Solution 1
function squareOrSquareRoot(array) {
    let results = []
    for(let i = 0; i < array.length; i++){
      if( Math.floor(array[i] ** .5) == (array[i] ** .5)) {
        results.push(array[i] ** .5);
      } else {
        results.push(array[i] ** 2);
      }
    }
    return results; 
  }

// Solution 2
function squareOrSquareRoot(array) {
    return array.map(e => Number.isInteger(Math.sqrt(e)) ? Math.sqrt(e) : e*e);  
}