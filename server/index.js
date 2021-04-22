const express = require('express');

const path = require('path');

const app = express();
const port = 3000;
const APIControllers = require('./APIControllers.js');

app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use('/products/:product_id', express.static(path.join(__dirname, '../client/dist')));

app.get('/jquery.js', (req, res) => (
  res.sendFile(path.resolve(__dirname, '..', 'node_modules', 'jquery', 'dist', 'jquery.js'))
));

app.get('/products/:product_id/jquery.js', (req, res) => (
  res.sendFile(path.resolve(__dirname, '..', 'node_modules', 'jquery', 'dist', 'jquery.js'))
));

app.get('/api/products/:product_id', (req, res) => {
  APIControllers.resourceHandler(req.params.product_id, (err) => {
    res.status(404);
    res.end();
  }, (productData) => res.send(productData));
});

app.put('/qa/questions/:question_id/helpful', APIControllers.questionHelpful);

app.put('/qa/answers/:answer_id/helpful', APIControllers.answerHelpful);

app.put('/reviews/:review_id/helpful', APIControllers.reviewHelpful);

app.put('/qa/questions/:question_id/report', (req, res) => {
  console.log(req.params);
  res.send('HELP');
});

app.put('/qa/answers/:answer_id/report', (req, res) => {
  console.log(req.params);
  res.send('HELP');
});

app.put('/reviews/:review_id/report', (req, res) => {
  console.log(req.params);
  res.send('HELP');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
