/*We want to know the index of the vowels in a given word, for example,
 there are two vowels in the word super (the second and fourth letters).
So given a string "super", we should return a list of [2, 4]. */

function vowelIndices(word){
    let result = [];
    word.split('').forEach((letter,index)=>{
      if (/[aeiouy]/gi.test(letter)){
        result.push(index+1)
      }
    })
    return result;

  }