/*Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative. */

function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) {
    return [];
  }
  let positiveCounter = input.reduce(
    (acc, num) => (num > 0 ? (acc += 1) : acc),
    0
  );
  let negativeSum = input.reduce(
    (acc, num) => (num < 0 ? (acc += num) : acc),
    0
  );
  return [positiveCounter, negativeSum];
}
