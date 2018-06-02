var express = require('express');
var app = express();
var path = require('path');
var Block = require('./lib/block.js');
var Chain = require("./lib/blockChain.js");
var bodyParser = require('body-parser');
var env = process.env.NODE_ENV || "test";
var mongoose = require('mongoose');
mongoose.connect(databaseSetup());
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

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
