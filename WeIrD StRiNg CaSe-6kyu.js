// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word 
// upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, 
// therefore that character should be upper cased and you need to start over for each word.
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

function toWeirdCase(string){
    let result = string.split(' ').map(word=>{   
      return word.split('').map((char,idx)=>{
        return idx%2 == 0 ? char.toUpperCase(): char.toLowerCase()
      }).join('')   
    }).join(' ')    
      return result;
    }
    