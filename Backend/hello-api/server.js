'use strict';

const express = require('express');

// 상수
const PORT = 8080;
const HOST = '0.0.0.0';

// 앱
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/hi', (req,res) => {
  res.send('Hi World');
});

app.get('/good', (req,res) => {
  res.send('good!');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
