// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
// Example 1:
// a1 = ["arp", "live", "strong"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns ["arp", "live", "strong"]


function inArray(array1,array2){
    let result = array1.filter(word =>{
      for(let i=0; i<array2.length; i++){
        if(array2[i].includes(word)) return word;
      }
    })
    return result.sort()
  }