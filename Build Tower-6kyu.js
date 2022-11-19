// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
// For example, a tower with 3 floors looks like this:
// [
//     "  *  ",
//     " *** ", 
//     "*****"
//   ]

function towerBuilder(nFloors) {
    const result = [];
    for (let i = 1; i< nFloors+1; i++ ){
       const tempArr = new Array(i+result.length)
        const spaceArr = new Array((nFloors-i))
        spaceArr.fill(' ')
       tempArr.fill("*")
      result.push([spaceArr.join(''),...tempArr,spaceArr.join('')].join(''))
      }
    return result;
  }