var express = require('express')
var app = express()
var PORT = process.env.PORT || 3000
var path = require('path')


app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'))
})


app.use(function(req, res, next) {
res.setHeader('Content-type', 'text/plain')
res.status(404).send('Error 404. \n Page not found.')
console.log('404')
})


app.listen(PORT, ()=> {
  console.log(`Server online at port ${PORT}`)
})
