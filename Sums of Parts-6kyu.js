// https://www.codewars.com/kata/5ce399e0047a45001c853c2b/train/javascript
//Link for description and kata.

function partsSums(ls) {
  let myArr = [0];
  let lsRev = ls.reverse();
  for (let i = 0; i < ls.length; i++) {
    myArr.push(lsRev[i] + myArr[i]);
  }
  return myArr.reverse();
}
