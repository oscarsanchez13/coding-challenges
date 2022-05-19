/*
Description:

Complete the solution so that it reverses the string passed 
into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

// Solution 1
function solution(str){
    let string = '';
    let arr = str.split('');
    for(let i=arr.length-1; i >= 0; i--){
      string += arr[i]
    }
    return string
}

// Solution 2
function solution(str){
    return str.split('').reverse().join('');  
}