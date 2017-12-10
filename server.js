const express = require('express');
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/data', function (req, res) {
    res.json({ data: 'Data From Node Service' })
});

app.get('/', function (req, res) {
    res.send('****Node App Built with Express Js****')
});

app.listen(4000);

console.log('Node Service Running On Port: 4000');
