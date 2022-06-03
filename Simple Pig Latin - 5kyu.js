// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  let myStr = str.split(" ");
  let mapped = myStr.map((word) => {
    if (!/[a-z]/gi.test(word)) return word;
    let return_word = word.split("");
    let firstLetter = return_word.shift();
    return_word.push(firstLetter + "ay");
    return return_word.join("");
  });
  return mapped.join(" ");
}
