var express = require('express');
var moment  = require('moment-timezone');
var app = express();
var PORT = process.env.PORT || 3000
var path = require('path');

moment.locale("nb");

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

app.use(function(req, res, next) {
res.status(404)
res.sendFile(path.join(__dirname, 'index.html'));

var date = moment.tz("Europe/Oslo").format("LLL")
console.log(`Error 404. \n${date}\n`);
});

app.listen(PORT, ()=> {
  console.log(`Server online at port ${PORT}`);
});
