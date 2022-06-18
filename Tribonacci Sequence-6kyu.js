// Well met with Fibonacci bigger brother, AKA Tribonacci.

// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next...

function tribonacci(signature,n){
    let resultArr = [...signature];
    if(n === 0){
      return [];
    }else if(n ==1) return [1]
    for(let i =3; i<n; i++){
      resultArr.push(resultArr[i-1]+resultArr[i-2]+resultArr[i-3])
    }
    return resultArr
  }