/*Create a function that takes a string and separates it into a sequence of letters. */

function sepStr(str) {
  let wordArr = str.split(" ");
  let maxLen = Math.max(...wordArr.map((elem) => elem.length));
  let result = [];
  for (let i = 0; i < maxLen; i++) {
    let verWord = [];
    for (let j = 0; j < wordArr.length; j++) {
      wordArr[j][i] == undefined
        ? verWord.push("")
        : verWord.push(wordArr[j][i]);
    }
    result.push(verWord);
  }
  return result;
}
