var fs      = require('fs');
var path    = require('path');
var morgan  = require('morgan');
var express = require('express');
var moment  = require('moment-timezone');

var PORT    = process.env.PORT || 3000;
var app = express();

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(__dirname + '/log/access.log', {flags: 'a'})
app.use(morgan(':remote-addr - :date[clf]', {stream: accessLogStream}))

// Set norwegian local time
moment.locale("nb");
app.use(express.static(path.join(__dirname, 'public')));

// route index file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

// route NCS website
app.get('/jodel', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/jodel.html'));
});


// Error 404. Send back to index file.
app.use(function(req, res, next) {
res.status(404);
res.sendFile(path.join(__dirname, 'index.html'));
var date = moment.tz("Europe/Oslo").format("LLL"); // Send norwegian timestamp to server located in germany
console.log(`Error 404. \n${date}\n`);
});


// Console log
app.listen(PORT, ()=> {
  console.log(`Server online at port ${PORT}`);
});
