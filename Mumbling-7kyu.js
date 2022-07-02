function accum(s) {
  return s.split('').map((char,idx)=>char.toUpperCase()+char.toLowerCase().repeat(idx)).join('-')
}