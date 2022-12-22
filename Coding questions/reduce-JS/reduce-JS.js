// Given an array, calculate the total of elements

let calculateSum = (array) => {
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });
    return sum;
};

let calculateSum1 = (array) => {
    return array.reduce((prevValue, currValue) => {
        return prevValue + currValue;
    });
};

let numbers = [1, 2, 3];
console.log(calculateSum1(numbers));