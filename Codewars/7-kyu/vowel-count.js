/*
Description:

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata 
(but not y).

The input string will only consist of lower case letters 
and/or spaces.
*/

function getCount(str) {
    let vowelsCount = 0;
    let vowels = ['a','e','i','o','u']
    let split = str.split('');
    for (let i = 0; i < split.length; i++){
      if(vowels.includes(split[i])){
        vowelsCount++
      }
    }  
    return vowelsCount;
}