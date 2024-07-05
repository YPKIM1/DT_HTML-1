// let name = "배문형"

// const multiply = function (a, b) {
//     let result = a * b;
//     return result;
// }

// console.log(multiply(2, 4))

// let moon = {
//     name: "배문형",
//     age: 36,
//     weight: 80,
// }

// let yoon = {
//     name: "윤석열",
//     age: 62,
//     weight: 100,
// }
// const bigger = function (a, b) {
//     return a.weight > b.weight ? a.name : b.name;
// }

const prompt = require('prompt-sync')();
let list = prompt("input please");
let num = Number(list);
let array = [];
for (let i = 1; i <= num; i++) {
    array.push(i);
}

const cal = function (array) {
    sum = 0;
    for (let i = 1; i <= array.length; i++) {
        sum = sum + i;
    }
    let answer = sum / array.length;
    return answer;
}

console.log(cal(array));

// const prompt = require('prompt-sync')();

// let user = prompt("what's your name?");
// let aged = prompt("what's your age?");

// if (user == true && aged == true) {
//     if (moon.weight > yoon.weight) {
//         console.log(moon.name + "이 더 무겁다!")
//     }
//     else if (moon.weight < yoon.weight) {
//         console.log(yoon.name + "이 더무겁다!")
//     }
//     else {
//         console.log("같다.")
//     }
// }
// else {
//     console.log("입력해주세요")
// }
