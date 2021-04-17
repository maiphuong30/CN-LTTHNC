var mongoose = require("mongoose");

var schemaSp = new mongoose.Schema({
    Name: String,
    Image: String,
    Cost: Number
});

module.exports = mongoose.model("product", schemaSp);