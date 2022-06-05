// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
  let a_Arr = [];
  let b_Arr = [];
  a.forEach((num) => (b.includes(num) ? null : b_Arr.push(num)));
  b.forEach((num) => (a.includes(num) ? null : a_Arr.push(num)));
  return a.length == 0 ? [] : [...a_Arr, ...b_Arr];
}
