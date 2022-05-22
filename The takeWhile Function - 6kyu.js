/* 
Here's another staple for the functional programmer. You have a sequence of values and some predicate for those values. You want to get the longest prefix of elements such that the predicate is true for each element. We'll call this the takeWhile function. It accepts two arguments. The first is the sequence of values, and the second is the predicate function. The function does not change the value of the original sequence.

function isEven(num) {
  return num % 2 === 0;
}
var seq = [2,4,6,8,1,2,5,4,3,2];

takeWhile(seq, isEven) // -> [2,4,6,8] */

function takeWhile(arr, pred) {
  let resArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (pred(arr[i])) {
      resArr.push(arr[i]);
    } else return resArr;
  }
  return resArr;
}
