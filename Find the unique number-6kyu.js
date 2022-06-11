// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

function findUniq(arr) {
    // do magic
    let resultObj = {};
    let result = null;
    for (let num of arr) {
        resultObj[num] = resultObj[num] + 1 || 1;
    }
    for (let keys in resultObj) {
        if (resultObj[keys] == 1) result = keys;
    }
    return +result;
}