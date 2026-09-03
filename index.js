// CommonJS, Node 14 era. Uses the deprecated `request` library.
var express = require('express');
var bodyParser = require('body-parser');
var request = require('request'); // deprecated, unmaintained
var _ = require('lodash');

var app = express();
app.use(bodyParser.json());

app.post('/notify', function (req, res) {
  var payload = _.merge({}, req.body); // old lodash — prototype pollution CVE
  // request() is deprecated; a modern rewrite would use fetch/axios.
  request.post(
    { url: 'http://localhost:9000/gateway/send', json: payload },
    function (err, response, body) {
      if (err) {
        return res.status(502).json({ error: 'gateway unreachable' });
      }
      res.json({ status: 'sent', gatewayStatus: response.statusCode });
    }
  );
});

app.listen(3001, function () {
  console.log('notifications listening on 3001');
});
