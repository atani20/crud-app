const express = require('express');
const morgan = require('morgan');

// Get app
const app = express();
// Morgan
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes/routes'));
// Starting server
app.listen('8800');