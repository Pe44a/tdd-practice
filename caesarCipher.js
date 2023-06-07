function stringToNumbers(string) {
    const num = [];
    
    for (const str of string) {
        num.push(str.charCodeAt(0));
    }
    return num;
}


function numbersToCipher(numbers) {
    let string = '';

    
      for (let i = 0; i < numbers.length; i++) {

       // If value is not from a-z/A-Z it does not have to go through cipher process
       if((numbers[i] >= 65 && numbers[i] <= 90) ||
        (numbers[i] >= 97 && numbers[i] <= 122)){

            // moves a-z value to the right
            // like so 'a' to 'b'
            numbers[i]++;

            // Wraps z to a or Z to A
            if(numbers[i] === 91){
                numbers[i] = 65;
            } else if(numbers[i] === 123) {
                numbers[i] = 97;
            }
       }

        string += String.fromCharCode(numbers[i]);
      }
      
    return string;
}


function caesarCipher(string) {

    const numbers = stringToNumbers(string);
    const cipher = numbersToCipher(numbers);

    return cipher;
}


module.exports = { caesarCipher};