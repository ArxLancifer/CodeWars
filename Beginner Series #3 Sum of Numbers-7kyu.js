// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
// Note: a and b are not ordered!
// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)

function getSum( a,b )
{
 let min = Math.min(a,b);
  let max = Math.max(a,b);
  let result = 0;
  while(max>=min){
    result+=min;
    min++;
  }
  return a===b ? b:result;
}
