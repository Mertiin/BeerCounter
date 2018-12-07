const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const data = {}

app.get('/', (req, res) => {
  res.send(data)
})

app.post('/', (req, res) => {
  if (!data[req.body.type]) data[req.body.type] = 0
  data[req.body.type] += req.body.count || 1
  res.send(data)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
