const express = require('express');

const app = express();
const { sayHello } = require('./lib/strings');

app.get('/strings/hello/:string', (request, response) => {
  response.status(200).json({ result: sayHello(request.params.string) });
});

module.exports = app;
