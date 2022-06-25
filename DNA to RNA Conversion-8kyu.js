// Create a function which translates a given DNA string into RNA.
// For example:
// "GCAT"  =>  "GCAU"

function DNAtoRNA(dna) {
    return dna.replace(/[T]/g,'U')
  }