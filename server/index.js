const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const APIControllers = require('./APIControllers.js')

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.get('/jquery.js', (req, res) => (
  res.sendFile(path.resolve(__dirname, '..', 'node_modules', 'jquery', 'dist', 'jquery.js'))
));

app.get('/products/:product_id', (req, res) => {
  APIControllers.resourceHandler(req.params.product_id);
  res.end();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
