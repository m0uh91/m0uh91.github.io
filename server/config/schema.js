const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BaseSchema = new Schema({
  iframe: {
    url: String,
    name: String,
    category: String
  },
});

const Base = mongoose.model('homepage', BaseSchema);

module.exports = Base;
