const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dbConnection = require('./config/connection');

const logger = require('./middleware/logger');
const routes = require('./routes/api');
require('dotenv').config();

const app = express();

//BodyParser Middleware

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Init Middleware
app.use(logger);

// Static Folder
// eslint-disable-next-line no-undef
app.use(express.static(path.join(__dirname,'public')));

// Set Routes
app.use(routes);

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;
dbConnection();
app.listen(PORT, () => {
    console.log(`Server stared on port ${PORT}`);
});
