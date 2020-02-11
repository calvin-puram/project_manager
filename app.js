const express = require('express');
const morgan = require('morgan');

const usersRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const globalError = require('./controller/globalError');

const app = express();
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('tiny'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/users', usersRoute);
app.use('/api/v1/auth', authRoute);
app.use(globalError);

module.exports = app;
