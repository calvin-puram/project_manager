const express = require('express');
const morgan = require('morgan');

const usersRoute = require('./routes/users');
const authRoute = require('./routes/auth');

const app = express();
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('tiny'));
}

app.use('/api/v1/users', usersRoute);
app.use('/api/v1/auth', authRoute);

module.exports = app;
