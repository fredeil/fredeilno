const fs      = require('fs');
const path    = require('path');
const morgan  = require('morgan');
const express = require('express');
const moment  = require('moment-timezone');

const PORT = process.env.PORT || 3000;
var app = express();

// Set norwegian local time
moment.locale("nb");
app.use(express.static(path.join(__dirname, 'public')));

// route index file
app.get('/', (req, res) => 
{
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

// route hotdog page
app.get('/hotdog', (req, res) => 
{
  res.sendFile(path.join(__dirname, 'hotdog.html'));
});


// Error 404. Send back to index file.
app.use(function(req, res, next) 
{
  res.status(404);
  res.sendFile(path.join(__dirname, '/public/index.html'));
  var date = moment.tz("Europe/Oslo").format("LLL");
  console.log(`Error 404 at ${date}\n`);
});


// Console log
app.listen(PORT, ()=> {
  console.log(`Server online at port ${PORT}`);
});
