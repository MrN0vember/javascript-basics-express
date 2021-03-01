const { request, response } = require('express');
const express = require('express');

const app = express();
const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');

app.get('/strings/hello/:string', (request, response) => {
  response.status(200).json({ result: sayHello(request.params.string) });
});

app.get('/strings/upper/:uppercase', (request, response) => {
  response.status(200).json({ result: uppercase(request.params.uppercase) });
});

app.get('/strings/lower/:lowercase', (request, response) => {
  response.status(200).json({ result: lowercase(request.params.lowercase) });
});

app.get('/strings/first-characters/:string', (request, response) => {
  response.status(200).send({ result: firstCharacter(request.params.string) });
});

module.exports = app;
