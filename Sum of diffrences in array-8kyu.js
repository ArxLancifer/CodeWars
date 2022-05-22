/* Your task is to sum the differences between consecutive pairs in the array in descending order.
For example:
[2, 1, 10]  ->  9
In descending order: [10, 2, 1]
Sum:(10 - 2) + (2 - 1) = 8 + 1 = 9 */

function sumOfDifferences(arr) {
  let sortedArr = arr.sort((a, b) => b - a);
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result = result + (sortedArr[i] - sortedArr[i + 1]) || result;
  }
  return result;
}
