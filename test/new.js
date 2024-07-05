const prompt = require('prompt-sync')();

let moon = {
    name: "배문형",
    age: 36,
    weight: 80,
}

let yoon = {
    name: "윤석열",
    age: 62,
    weight: 100,
}

const calculate = function (number) {
    array = [];
    for (let i = 0; i <= number; i++) {
        array.push(i);
    }
    sum = 0;
    for (i = 0; i < number; i++) {
        sum = sum + array[i];
    }
    let result = sum / number;
    return result;
}


console.log(calculate(4))