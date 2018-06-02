var express = require('express');
var app = express();
var path = require('path');
var Block = require('./lib/block.js');
var Chain = require("./lib/blockChain.js");
var bodyParser = require('body-parser');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

var env = process.env.NODE_ENV || "test";

var mongoose = require('mongoose');
mongoose.connect(databaseSetup());
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('connected');
});

var doctorSchema = mongoose.Schema({
  doctorName: String,
  doctorID: String,
  doctorPass: String
});

var Doctor = mongoose.model("Doctor", doctorSchema);
console.log(Doctor);
savedDoctor = new Doctor({doctorName: 'Robbie', doctorID: '12345', doctorPass: 'abc123'});
console.log(savedDoctor);
savedDoctor.save(function(err, res) {
  if (err) return "ERROR";
  console.log("saved");
});


function databaseSetup() {
  return env === "test" ? 'mongodb://localhost:27017/blockchain_test' : 'mongodb://localhost:27017/blockchain_production';
}


app.use(express.static(path.join(__dirname, 'public')));
var chain = new Chain.Chain();

app.get('/', function (req, res) {
  res.render('index');
  console.log(chain);
});

app.post('/info', function(req, res){

  let newBlock = new Block.Block(req.param('patientNames'), req.param('doctorName'), req.param('prescription'));
  chain.addBlock(newBlock);
});

app.listen(9000, () => console.log('Pharmacy app listening on port 9000'));
