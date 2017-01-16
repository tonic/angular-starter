var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.get('/api/test', function (req, res) {
  res.json({
    content: 'I am an about page'
  });
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

var port = 8000;
app.listen(port, function() {
  console.log('server listening on port ' + port);
});
