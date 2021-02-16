const express = require('express');
const path = require('path');
const db = require('../db');
const PORT = 3000 || process.env.PORT;
const PUBLIC_DIR = path.resolve(__dirname);
const app = express();
const morgan = require('morgan');

app.use(morgan);
app.use(express.json);
app.use(express.static(PUBLIC_DIR));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});