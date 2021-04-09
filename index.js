var express = require('express');
var router = express.Router();
var port = 3000;

var app = express();
app.set('view engine', 'ejs');
app.set("views", "./views")
app.use(express.static("public"));

var home = require('./routes/pageRoute');
var adRoute = require('./routes/quanliRoute');

app.use('/', home);
app.use('/admin', adRoute);

app.listen(port, function () {
    console.log("Server listening on port " + port);
});
