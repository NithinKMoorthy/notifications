// CommonJS. Uses the built-in global fetch (Node 18+) instead of the
// deprecated `request` library.
var express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');

var app = express();
app.use(bodyParser.json());

app.post('/notify', async function (req, res) {
  var payload = _.merge({}, req.body);
  try {
    var response = await fetch('http://localhost:9000/gateway/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    res.json({ status: 'sent', gatewayStatus: response.status });
  } catch (err) {
    res.status(502).json({ error: 'gateway unreachable' });
  }
});

app.listen(3001, function () {
  console.log('notifications listening on 3001');
});
