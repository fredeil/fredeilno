var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000
var path = require('path');
var date = new Date();

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
console.log(`Error 404. \n${date}`);
});

app.listen(PORT, ()=> {
  console.log(`Server online at port ${PORT}`);
});
