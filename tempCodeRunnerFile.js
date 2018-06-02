var env = process.env.NODE_ENV || "test";
var dependencies = require("./dependencies.js");
var app = dependencies.setupApp();
console.log(app);
dependencies.connectToDatabase(env);
app.set('view engine', 'ejs');