let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let morgan = require('morgan');
let iframeRoutes = require('./routes/iframeRoutes');
let mongoose = require('mongoose');
const configBase = require('./config/base');

let app = express();
// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

// Connection a la db
mongoose.connect(configBase.db.url + configBase.db.name,{ useMongoClient: true });

// Divers routes
app.use('/iframe', iframeRoutes);

// Fire
app.listen(configBase.app.port, () => {
  console.log('Good on port 3000')
});