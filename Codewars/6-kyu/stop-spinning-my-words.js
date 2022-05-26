/*
Description:

Write a function that takes in a string of one or more words, 
and returns the same string, but with all five or more letter 
words reversed (Just like the name of this Kata). Strings 
passed in will consist of only letters and spaces. Spaces will 
be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey 
wollef sroirraw" spinWords( "This is a test") => returns "This 
is a test" spinWords( "This is another test" )=> returns "This 
is rehtona test"
*/

// Solution 1 (My First Answer)
function spinWords(string){
    let words = string.split(' ');
    for(let i=0; i<words.length; i++) {
      if(words[i].length > 4) {
        words[i] = words[i].split('').reverse().join('')
      }
    }
    return words.join(' ');
}

// Solution 2 (Replace Words W/ Length Of 5 Or Greater)
function spinWords(string){
    return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
}

// Solution 3 (Map Through Sentence And Reverse Words With Length Greater Than 5)
function spinWords(str){
    return str.split(' ').map( w => w.length<5 ? w : w.split('').reverse().join('') ).join(' ');
}