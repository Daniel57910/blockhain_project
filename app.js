var env = process.env.NODE_ENV || "test";
var dependencies = require("./dependencies.js");
var app = dependencies.setupApp();
var Chain = require("./lib/blockChain.js");
var Block = require("./lib/block.js");
var chain = new Chain.Chain();


dependencies.connectToDatabase(env);
app.set('view engine', 'ejs');
app.use(dependencies.bodyParser.urlencoded({ extended: true }));
app.use(dependencies.express.static(dependencies.path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.render('index');
  console.log(chain);
});

app.post('/info', function(req, res){
  let newBlock = new Block.Block(req.param('patientNames'), req.param('doctorName'), req.param('prescription'));
  chain.addBlock(newBlock);
  res.redirect('/');
});

app.listen(9000, () => console.log('Pharmacy app listening on port 9000'));
