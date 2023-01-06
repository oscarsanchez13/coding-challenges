/*
Description:

Task:
Given a two dimensional array, return the co-ordinates of x.

If x is not inside the array, or if x appears multiple times, return [].

The co-ordinates should be zero indexed in row-major order.
You should assume you will always get an array as input. The array will only contain 'x's and 'o's.

Examples
Input: []
Return an empty array if input is an empty array => []

Input: [
  ['o', 'o'],
  ['o', 'o']
]
Return an empty array if no x found => []

Input: [
  ['x', 'o'],
  ['o', 'x']
]
Return an empty array if more than one x found => []

Input: [
  ['x', 'o'],
  ['o', 'o']
]
Return [0,0] when x at top left => [0, 0]

Input: [
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
]
Return [4,6] for the example above => [4, 6]
*/

// Solution 1
function xMarksTheSpot(input){
  var result = [];
  for(let i = 0; i < input.length; i++){
    for(let j = 0; j < input[i].length; j++){
        if (input[i][j] == 'x') 
        result.push([i, j]);
    }
  }
  if (result.length !=1){
    return []
  }
  return result[0];
}

// Solution 2
const xMarksTheSpot = (input) => {
  var arr=[];
  for (var i=0; i<input.length; ++i)
    for (var j=0; j<input[i].length; ++j)
      if (input[i][j]=='x')
        arr.push([i,j]);
  return arr.length==1?arr[0]:[];
}