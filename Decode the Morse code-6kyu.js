decodeMorse = function(morseCode){
    let decodeString = '';
    let morseCodeWords = morseCode.split('   ');
    for (let i in morseCodeWords) {
      let morseCodeArray = morseCodeWords[i].split(' ');
      for (let j in morseCodeArray) {
        if (MORSE_CODE[morseCodeArray[j]] !== undefined) {
          decodeString += MORSE_CODE[morseCodeArray[j]];
        }
      }
      decodeString += ' ';
    }
    decodeString = decodeString.trim();  
    return decodeString;
  }