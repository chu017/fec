const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.get('/jquery.js', (req, res) => (
  res.sendFile(path.resolve(__dirname, '..', 'node_modules', 'jquery', 'dist', 'jquery.js'))
));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
