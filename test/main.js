let moon = {
    name: "배문형",
    age: 36,
}

let yoon = {
    name: "윤석열",
    age: 62,
}

console.log(yoon.age < moon.age);

if (moon.age > yoon.age) {
    console.log(moon.name + '이 ' + yoon.name + '보다 나이가 더 많습니다.')
} else if (moon.age < yoon.age) {
    console.log(moon.name + '이 ' + yoon.name + '보다 젊습니다.')
} else {
    console.log('둘은 나이가 같습니다.')
}

console.log((moon.age < yoon.age ? moon.name : yoon.name) + '이 젊습니다.')
console.log('---------------------')

moon.weight = 80;
yoon.weight = 100;

console.log(moon);

for (let i = 0; i < 3; i++) {
    console.log(moon.name);
}

console.log('---------------------')

const prompt = require('prompt-sync')();

let result = 0;
// let num =100;

const name = prompt('어디까지 더할까요?');

for (let i = 0; i < (Number(name) + 1); i++) {
    result += i;
}

console.log(result);





// let result1 = 0
// let number = 200
// let i = 0
// while (i <= number) {
//     result1 += i;
//     i++
// }
// console.log(result1);