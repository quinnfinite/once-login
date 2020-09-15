const express = require('express');
const app = express();
const path = require('path')
const port = 8000;
const staticAssets = path.join(__dirname, '../client')
app.use(express.static(staticAssets))

app.get('*', (req, res) => {
  res.sendFile('index.html', {root: staticAssets})
})

app.listen(port, ()=>{
  console.log(`http://localhost:${port}`)
})