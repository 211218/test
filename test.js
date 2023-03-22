const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  const data = req.query;
  console.log(`Received webhook data: ${JSON.stringify(data)}`);


  res.status(200).end();
});

app.listen(3000, () => {
  console.log('Webhook server listening on port 3000');
});