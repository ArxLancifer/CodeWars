// You are going to be given an array of integers.
//  Your job is to take that array and find an index N where the
//  sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.


function findEvenIndex(arr)
{
  let result;
  let leftSide;
  let rightSide;
  for(let i = 0; i<=arr.length; i++){
    leftSide = arr.slice(0, i).reduce((acc, num)=>{return acc+=num},0);
    
    rightSide = arr.slice(i+1, arr.length).reduce((acc, num)=>{return acc+=num},0);
    if(leftSide == rightSide) {
      return i;
    };
  }
  if(!result) return -1; 
}