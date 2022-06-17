// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
// Example: (Input --> Output)
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str) {
    let sortedStr = str.toLowerCase().split('').sort((a, b) => a === b ? 0 : a > b ? 1 : -1);
    return sortedStr.find((elem, idx) => elem == sortedStr[idx + 1]) == undefined ? true : false;
}