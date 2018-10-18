var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cons = require('adaro');
var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');

var app = express();
// app.use(webpackMiddleware(webpack(webpackConfig), {
//   noInfo: true,
//   publicPath: path.join(__dirname, 'dist')
// }));
// app.use(webpackMiddleware(webpack(webpackConfig)))
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/user', userRouter);
app.use('/users', usersRouter);

app.use(express.static(path.join(__dirname, 'public/js')));
app.get('/app', (req, res) =>
    res.sendFile(path.resolve(__dirname, './public/js/index.html'))
);

app.use(express.static(path.join(__dirname, 'public/angular')));
app.get('/ng', (req, res) =>
    res.sendFile(path.resolve(__dirname, './public/angular/index.html'))
);
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
  res.render('error');
});

module.exports = app;
