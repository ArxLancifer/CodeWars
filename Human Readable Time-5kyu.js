// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable (seconds) {
    const secArg = seconds;
    function sec(seconds){
      let timeStr = `${Math.floor(seconds%60 === 0 || seconds%60 === 60 ? '00': seconds%60)}`;
      timeStr = timeStr.length <2 ? '0'+timeStr:timeStr;
    return timeStr;
    }
    function min(seconds){
      let timeStr = `${Math.floor((seconds/60)%60 === 0 || seconds/60 === 60 ? '00': (seconds/60)%60)}`;
      timeStr = timeStr.length < 2 ? '0'+timeStr:timeStr  
      return timeStr;
    }
    function hour(seconds){
      let timeStr = `${Math.floor(seconds/3600 === 0 ||       seconds/3600 === 60 ? '00': seconds/3600)}`;
      timeStr = timeStr.length <2 ? '0'+timeStr:timeStr
      return timeStr;
    }
    return `${hour(secArg)}:${min(secArg)}:${sec(secArg)}`;
  }