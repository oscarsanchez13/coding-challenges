/*
Description:

Write a function that takes a string of parentheses, and 
determines if the order of the parentheses is valid. The 
function should return true if the string is valid, and false 
if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100
*/

// Solution 1
function validParentheses(x){
    let total = 0;  
    for (let i = 0; i < x.length && total >= 0; i++) {
      total += (x[i] == '(') ? 1 : -1;    
    }  
    return (total == 0);
}

/* Solution 2 (Varifies if theirs equal opening and closing 
parenthesis but not if they're in order) */
function validParentheses(x) {
    let arr = x.split('');
    let open = 0;
    let close = 0;
    for(let i=0; i<arr.length; i++){
      arr[i] === '(' ? open++ : close++;
    }
    return open === close;
}