const prompt = require('prompt-sync')();

let mbti = "";


while (mbti.length < 1) {
    let ei = prompt("고등학교 때 유명했나요? (Y/N) ");
    if (ei == "Y") {
        mbti = mbti + "e";
    } else if (ei == "N") {
        mbti = mbti + "i";
    } else {
        console.log("똑바로 입력하세요");
    }
}

while (mbti.length < 2) {
    let sn = prompt("스포츠(운동)을 잘 하나요? (Y/N) ");
    if (sn == "Y") {
        mbti = mbti + "s";
    } else if (sn == "N") {
        mbti = mbti + "n";
    } else {
        console.log("똑바로 입력하세요");
    }
}
while (mbti.length < 3) {
    let tf = prompt("수학을 잘 하나요? (Y/N) ");
    if (tf == "Y") {
        mbti = mbti + "t";
    } else if (tf == "N") {
        mbti = mbti + "f";
    } else {
        console.log("똑바로 입력하세요");
    }
}

while (mbti.length < 4) {
    let jp = prompt("지금 방이 깨끗한가요? (Y/N)");
    if (jp == "Y") {
        mbti = mbti + "j";
    } else if (jp == "N") {
        mbti = mbti + "p";
    } else {
        console.log("똑바로 입력하세요");
    }
}

console.log("당신의 mbti는 혹시" + mbti + "아닌가요?");


