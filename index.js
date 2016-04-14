var express = require('express')
var app = express()
var PORT = process.env.PORT || 3000
var path = require('path')


app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})


app.listen(PORT, ()=> {
  console.log(`Server online at port ${PORT}`)
})
