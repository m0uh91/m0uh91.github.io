const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IframeSchema = new Schema({
  url: String,
  name: String,
  category: String
});

const Iframe = mongoose.model('iframe', IframeSchema);

module.exports = Iframe;
