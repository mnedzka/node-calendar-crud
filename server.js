const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { PORT } = require('./constants');
const rootRouter = require('./rootRouter');

const app = express();

app.use(morgan('combined'));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(rootRouter);

app.set('port', PORT);

app.listen(app.get('port'), () => {
  console.info(`express app running on port: ${app.get('port')}`);
});
