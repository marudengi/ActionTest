'use strict';

const express = require('express');
const config = require('./config');


// 상수
const PORT = config.app.port;
const HOST = config.app.host;

// 앱
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Node!');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
