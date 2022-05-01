/*
Description:

In this Kata, you will be given a string and your task will be 
to return a list of ints detailing the count of uppercase 
letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and 
special characters.
*/

// Solution 1
function solve(s){
    let result = [0,0,0,0];
    let check = s.split("");
     for(let i=0; i<check.length; i++){
       if(isNaN(check[i]) === false){
         result[2]++;
       } 
       else if(check[i] === check[i].toUpperCase() && check[i] !== check[i].toLowerCase()){
         result[0]++;
       }
       else if(check[i] === check[i].toLowerCase() && check[i] !== check[i].toUpperCase()){
         result[1]++;
       } 
       else {
         result[3]++;
       }
     }
     return result;
}

// Solution 2
function solve(s){
    let result = [0,0,0,0];
    let check = s.split("");
     for(let i=0; i<check.length; i++){
       if(check[i].match(/[A-Z]/)){
         result[0]++;
       } 
       else if(check[i].match(/[a-z]/)){
         result[1]++;
       }
       else if(check[i].match(/[0-9]/)){
         result[2]++;
       } else {
         result[3]++;
       }
     }
     return result;
}