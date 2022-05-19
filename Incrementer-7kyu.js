/*Given an input of an array of digits, return the array with each digit incremented by its position in the array: the first digit will be incremented by 1, the second digit by 2, etc. Make sure to start counting your positions from 1 ( and not 0 ). */

function incrementer(nums) {
  // code goes here
  return nums.map((num, idx) => {
    let myNumToStr = String(num + (idx + 1));
    console.log(myNumToStr.charAt(myNumToStr.length - 1));
    return myNumToStr.length > 1
      ? +myNumToStr.charAt(myNumToStr.length - 1)
      : +myNumToStr;
  });
}
