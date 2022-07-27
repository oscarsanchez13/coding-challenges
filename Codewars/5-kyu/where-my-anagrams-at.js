/*
Description:

What is an anagram? Well, two words are anagrams of each other 
if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false

Write a function that will find all the anagrams of a word from 
a list. You will be given two inputs a word and an array with 
words. You should return an array of all the anagrams or an 
empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) 
        => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) 
        => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
Note for Go
For Go: Empty string slice is expected when there are no 
anagrams found.
*/

// Solution 1 (Using filter, split and sort)
function anagrams(mainWord, listOfWords) {
    return listOfWords.filter(function(currentWord){
      return currentWord.split('').sort().join('') === mainWord.split('').sort().join('');
    });
}

// Solution 2 (broken)
function anagrams(word, words) {
    let result = [];
    let letter = word.split('');
    for(let i=0; i<words.length; i++){
      let currentWord = words[i].split('');
      if(currentWord.includes(letter[i]))
        result.push(words[i])
    }
    return result;
  }

// Solution 3 (without using sort)
function anagrams(word, words) {
    var rta = [];
    for (let i = 0; i < words.length; i++) {//travels words
      var letters = word.split('');
      var ana = words[i].split('');
      while (letters.length > 0) {//compares every letter
        var x = letters.pop();
        var index = ana.indexOf(x);
        if (index === -1)//ends if that letter is not in the word
          break;
        ana.splice(index, 1);
      }
      if (letters.length === 0 && ana.length === 0)
        rta.push(words[i])
    }
    return rta;
}
