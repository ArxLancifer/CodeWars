/*A palindrome is a word, phrase, number, or other sequence of characters which reads the same
 backward as forward. Examples of numerical palindromes are: */

function palindrome(num) { 

    let rev = String(num).split("").reverse().join('')
    if (typeof num !== 'number' || num<=0) {return "Not valid";}
    return num === +rev ? true:false;
  } 