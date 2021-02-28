const express = require('express');

const app = express();
const { sayHello, uppercase } = require('./lib/strings');

app.get('/strings/hello/:string', (request, response) => {
  response.status(200).json({ result: sayHello(request.params.string) });
});

app.get('/strings/upper/:uppercase', (request, response) => {
  response.status(200).json({ result: uppercase(request.params.uppercase) });
});

module.exports = app;
