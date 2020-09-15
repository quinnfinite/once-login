const express = require('express');
const app = express();
const path = require('path')
const port = 8000;

app.use(express.static(path.join(__dirname, '../client')))

app.get('/', (req, res) => {
  res.sendFile('index')
})

app.listen(port, ()=>{
  console.log(`http://localhost:${port}`)
})