var mongoose = require('mongoose');

var doctorSchema = mongoose.Schema({
  doctorName: String,
  doctorID: String,
  doctorPass: String
});

module.exports = mongoose.model('Doctor', doctorSchema);