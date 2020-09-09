const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded());

const urlShortener = require('node-url-shortener');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + './public'));
});

app.post('/url', function (req, res) {
  const url = req.body.url;

  urlShortener.short(url, function (err, shortUrl) {
    res.send(shortUrl);
  });
});

app.listen(port, () => console.log(`url-shortener listening on port ${port}!`));

// const express = require('express');
// const compression = require('compression');
// const morgan = require('morgan');
// const path = require('path');

// const PORT = process.env.PORT || 3000;

// const app = express();
// const dev = app.get('env') !== 'production';

// if (!dev) {
//   app.disable('x-powered-by');
//   app.use(compression);
//   app.use(morgan('common'));

//   app.use(express.static(path.resolve(__dirname, 'public')));

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
//   });
// }

// if (dev) {
//   app.use(morgan('dev'));
// }

// app.listen(PORT, (err) => {
//   if (err) throw err;

//   console.log('server started port 3000');
// });
