/*
Description:

Complete the function that calculates the area of the red 
square, when the length of the circular arc A is given as 
the input. Return the result rounded to two decimals.

Note: use the π value provided in your language 
(Math::PI, M_PI, math.pi, etc)
*/

// Solution 1
function squareArea(A){
    let R = (2*A/Math.PI) ** 2 
    return +R.toFixed(2);
}

// Solution 2
function squareArea(x){
    let c = 4 * x;
    let r = c / (2 * Math.PI);
    let a = r ** 2;
    return Number(a.toFixed(2));
  }