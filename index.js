export {capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
    return string.split("").reverse().join("");
}

class calculator{
    constructor(){
    }

    add(a, b){
        return a + b;
    }

    subtract(a, b){
        return a - b;
    }

    divide(a, b){
        return a / b;
    }

    multiply(a, b){
        return a * b;
    }
}

function caesarCipher(string, shift) {
    var output = "";
     
    // Loop through each character in the input string
    for (var i = 0; i < string.length; i++) {
      var ascii = string[i].charCodeAt();
       
      // Check if the character is a letter
      if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
        // Shift the letter by the shift amount, wrapping around the alphabet if necessary
        ascii += shift;
        if ((ascii > 90 && string[i] <= 'Z') || ascii > 122) {
          ascii -= 26;
        }
      }
       
      // Add the new character to the output string
      output += String.fromCharCode(ascii);
    }
     
    // Return the output string
    return output;
}

function analyzeArray(array) {
    let avg = array.reduce((a, b) => a + b) / array.length;
    let min = Math.min(...array);
    let max = Math.max(...array);
    let length = array.length;
    return { average: avg, min: min, max: max, length: length };
}