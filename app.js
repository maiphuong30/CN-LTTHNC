var express = require('express');
var app = express();
var router = express.Router();


app.set('view engine', 'ejs');
app.set("views","./views")
app.use(express.static("public"));

var home = require('./routers/pageRouter');

app.use('/', home);

app.listen(3000);
