/*In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive! */
//1,9 -> 1,2,3,4,6,7,8,9 -> Result 8

function dontGiveMeFive(start, end) {
  let result_array = [];
  for (let i = start; i <= end; i++) {
    result_array.push(i);
  }

  return result_array.filter((num) => {
    return !String(num).includes("5");
  }).length;
}
