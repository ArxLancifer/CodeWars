// The Fibonacci numbers are the numbers in the following integer sequence (Fn):
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...
// such as
// F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

function productFib(prod) {
  var fir = 0;
  var sec = 1;
  while (prod > fir * sec) {
    fir = fir + sec;
    sec = fir - sec;
  }

  return [sec, fir, fir * sec === prod];
}
