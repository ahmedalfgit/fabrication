const express = require('express');
const createServer = require('http');
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');

const PORT = process.env.PORT || 3000;

const app = express();
const dev = app.get('env') !== 'production';

if (!dev) {
  app.disable('x-powered-by');
  app.use(compression);
  app.use(morgan('common'));

  app.use(express.static(path.resolve(__dirname, 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

if (dev) {
  app.use(morgan('dev'));
}

app.listen(PORT, (err) => {
  if (err) throw err;

  console.log('server started port 3000');
});
