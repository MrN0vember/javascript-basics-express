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

const { add } = require('./lib/numbers');

// ** Strings **

app.get('/strings/hello/:string', (request, response) => {
  response.status(200).json({ result: sayHello(request.params.string) });
});

app.get('/strings/upper/:uppercase', (request, response) => {
  response.status(200).json({ result: uppercase(request.params.uppercase) });
});

app.get('/strings/lower/:lowercase', (request, response) => {
  response.status(200).json({ result: lowercase(request.params.lowercase) });
});

// //app.get('/strings/first-character/:string', (request, response) => {
//  // response.status(200).send({ result: firstCharacter(request.params.string) });
// });

app.get('/strings/first-characters/:string', (request, response) => {
  if (request.query.length) {
    response
      .status(200)
      .json({ result: firstCharacters(request.params.string, request.query.length) });
  } else {
    response.status(200).send({ result: firstCharacter(request.params.string) });
  }
});

// ** Numbers **

// app.get('/numbers/add/:a/and.:b' (request, response) => {

// })

module.exports = app;
