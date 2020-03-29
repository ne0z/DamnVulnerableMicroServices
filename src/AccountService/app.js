var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;

var indexRouter = require('./routes/index');

var app = express();

mongoose
    .connect(db)
    .then(() => console.log("mongoDB Connected"))
    .catch((err) => console.log(err));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');

app.use('/api/account/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/account', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    status: 'FAIL',
    message: err.message
  });
});

module.exports = app;
