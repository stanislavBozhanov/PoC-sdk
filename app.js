var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var generatePDF = require('./utils/generatePDF');
var questionRoutes = require('./routes/questions');
var swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('./swagger.json');

var app = express();



app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// Routes
app.use(function (req, res, next) {
  require('./routes/index')(req, res, next);
});
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/pdf', generatePDF);
app.use('/questions', questionRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Page Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
    message: err.message
  }));
});

module.exports = app;
