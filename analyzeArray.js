const analyzeArray = (array) => {
    
    const sum = array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);

    const average = sum / array.length;


    const min = Math.min(...array);
    const max = Math.max(...array);
    const length = array.length;

    return {
        average: average,
        min: min,
        max: max,
        length: length
    }
};


module.exports = { analyzeArray}