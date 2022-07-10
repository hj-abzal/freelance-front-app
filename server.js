const express  = require('express');
const path = require('path');

const PORT = 8080;

const app = express();

app.use(express.static(__dirname));
app.use(express.static(path.resolve(__dirname, 'dist/freelance')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/freelance', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`server works on port: ${PORT}`)
})
