/*Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
You need to return the highest scoring word as a string.
If two words score the same, return the word that appears earliest in the original string.
All letters will be lowercase and all inputs will be valid. */

function high(x){
    let myObj = {}
    for(let key of x.split(' ')){
      myObj[key] = myObj[key]+1 
    }
    for(let prop in myObj){
     myObj[prop] = prop.split("").reduce((acum,char)=>acum+=char.charCodeAt(0)-96,0)
    }
   
    return Object.keys(myObj).reduce((high, word)=> myObj[high] >= myObj[word] ? high:word,0)
  }