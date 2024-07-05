const express = require('express');
const app = express();

app.listen(8080, function () {
    console.log('8080포트에서 서버 실행 중')
})

app.get('/', (req, res) => {
    res.send("<h2>제목임다</h2>");
})

app.get('/todas', (req, res) => {
    res.send("<h1>할일목록입니다.</h1>");
})