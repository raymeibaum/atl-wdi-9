var express = require('express');
var app = express();

var crypto = require('crypto');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));

// app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));

app.get('/home', (req, res) => {
  res.end('Hello World!');
});

app.get('/search', (req, res) => {
  res.send(req.query);
})

app.post('/form', (req, res) => {
  res.end(req.body.str.split('').reverse().join(''));
});

app.put('/message/:id', (req, res) => {
  res.end(crypto.createHash('sha1')
                .update(new Date().toDateString() + req.params.id)
                .digest('hex'));
});

app.listen(process.argv[2]);
