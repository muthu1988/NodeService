const express = require('express');
const app = express();

app.get('/data', function (req, res) {
    res.json({ data: 'Data From Node Service' })
});

app.get('/', function (req, res) {
    res.send('****Node App Built with Express Js****')
});

app.listen(3000);

console.log('Node Service Running On Port: 3000');
