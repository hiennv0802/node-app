var express = require('express');
var path = require('path');
var app = express();
var index = require('./routes/index');
var users = require('./routes/users');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

app.engine("jade", require("jade").__express);
app.set("view engine", "jade");
app.use(express.static(__dirname + "/public"));
app.use(require("./middlewares/users"));
// app.use(require("./controllers"));

app.listen(3000, function() {
  console.log("Listen on port 3000...");
});

module.exports = app;
