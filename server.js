const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, 'build')));

-app.get('/', function (req, res) {
+app.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname, 'build', 'index.html'));
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
