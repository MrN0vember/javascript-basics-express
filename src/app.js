const express = require('express');

const app = express();
const { sayHello, uppercase, lowercase } = require('./lib/strings');

app.get('/strings/hello/:string', (request, response) => {
  response.status(200).json({ result: sayHello(request.params.string) });
});

app.get('/strings/upper/:uppercase', (request, response) => {
  response.status(200).json({ result: uppercase(request.params.uppercase) });
});

app.get('/strings/lower/:lowercase', (request, response) => {
  response.status(200).json({ result: lowercase(request.params.lowercase) });
});

module.exports = app;
