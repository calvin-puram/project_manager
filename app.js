const express = require('express');
const morgan = require('morgan');

const app = express();
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('tiny'));
}

module.exports = app;