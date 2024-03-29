/*
Description:

We want to know the index of the vowels in a given word, for 
example, there are two vowels in the word super (the second 
and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]
NOTES
Vowels in this context refers to: a e i o u y (including upper 
case)
This is indexed from [1..n] (not zero indexed!)
*/

// Solution 1
function vowelIndices(word) {
  let arr = word.toLowerCase().split('');
  let result = [];
  arr.forEach((x, i) => {
    if (
      x === "a" ||
      x === "e" ||
      x === "i" ||
      x === "o" ||
      x === "u" ||
      x === "y"
    ) {
      result.push(i + 1);
    }
  });
  return result;
}

// Solution 2
function vowelIndices(word){
  let result = [];
  let arr = word.toLowerCase().split('');
  for(let i=0; i < arr.length; i++){
    if(arr[i] === 'a' || 
       arr[i] === 'e' || 
       arr[i] === 'i' || 
       arr[i] === 'o' || 
       arr[i] === 'u' || 
       arr[i] === 'y') 
      result.push(i + 1)    
  }
  return result;
}

// Solution 3
function vowelIndices(word){
  let result = [];
  let arr = word.toLowerCase().split('');
  for(let i=0; i < arr.length; i++){
    if(arr[i].includes('a') || 
       arr[i].includes('e') || 
       arr[i].includes('i') || 
       arr[i].includes('o') || 
       arr[i].includes('u') || 
       arr[i].includes('y')) 
      result.push(i + 1)    
  }
  return result;
}