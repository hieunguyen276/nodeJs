// server.js
const express = require('express');
const app = express();
const port = 3000;

const API_V1 = require('./routes/v1');
var bodyParser = require('body-parser');
const errorHandle = require('./middlewares/errorHandler');
require('dotenv').config()



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// req/res requests/response
// sử dụng app.use để định nghĩa routes trong server
app.use('/v1', API_V1);
app.use(errorHandle);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});