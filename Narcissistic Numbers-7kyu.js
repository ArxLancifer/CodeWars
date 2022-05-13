/*A Narcissistic Number is a number of length n in which the sum of its digits to the power of n is equal to the original number. If this seems confusing, refer to the example below.

Ex: 153, where n = 3 (number of digits in 153)
13 + 53 + 33 = 153 */

function isNarcissistic(n) {
  //your code here
  let setup_n = String(n).split("");
  return (
    setup_n.reduce((acc, num) => (acc += (+num) ** setup_n.length), 0) === n
  );
}
