/*Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1
'A' and 'C' returns 1
'b' and 'G' returns 0
'B' and 'g' returns 0
'0' and '?' returns -1 */

function sameCase(a, b) {
  let a_isLower = a == a.toUpperCase();
  let b_isLower = b == b.toUpperCase();
  const myReg = /[a-zA-Z]/;
  return !myReg.test(a) || !myReg.test(b)
    ? -1
    : a_isLower === b_isLower
    ? 1
    : 0;
}
