var express = require('express');
var moment  = require('moment-timezone');
var app = express();
var PORT = process.env.PORT || 3000
var path = require('path');

// Set norwegian local time
moment.locale("nb");

app.use(express.static(path.join(__dirname, 'public')));


// route index file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// view  beta site
app.get('/ncs', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
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
