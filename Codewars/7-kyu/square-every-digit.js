/*
Description:

Welcome. In this kata, you are asked to square every digit of a 
number and concatenate them.

For example, if we run 9119 through the function, 811181 will 
come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/

// Solution 1
const squareDigits = num => {
    return +Array.from(num.toString(), n => n * n).join('')
}

// Solution 2
function squareDigits(num){
    let result = num
      .toString()
      .split("")
      .map( num => parseInt(num) )
      .map( num => num * num )
      .join("")
     
    return parseInt(result)
  }