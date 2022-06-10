// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

function duplicateEncode(word) {
    function findDublics(charsArr) {
        return charsArr.filter((char, idx) => word.toLowerCase().indexOf(char) !== idx)
    }
    let wordArr = word.toLowerCase().split('');
    let dubs = findDublics(wordArr)
    return wordArr.map(char => dubs.includes(char) ? ")" : "(").join('')
}
