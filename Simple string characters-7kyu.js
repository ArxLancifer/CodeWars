/*In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters. */

function solve(s){
    let upper =0;
    let lower =0;
    let spec =0;
    let num =0;
  let x =1;
    
    s.split('').forEach(elem=>{
      console.log(/[A-Z]/.test(elem))
      if(/[0-9]/.test(elem)){
        num++
      }else if(/[A-Z]/.test(elem)){
       upper++
      } else if(/[a-z]/.test(elem)){
        lower++
      }else {spec++;}
    
   //..
  })
    return [upper,lower,num,spec]
   }