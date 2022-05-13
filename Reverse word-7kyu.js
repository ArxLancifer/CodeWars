/*Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained. */

function reverseWords(str) {
    
    let rev_str = str.split("").reverse().join("");
    return rev_str.split(" ").reverse().join(" ");
  }