const express = require('express')
const app = express()
const path = require('path');
app.use('/js', express.static('js'))

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
})