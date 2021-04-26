var mongoose = require("mongoose");

var schemaSp = new mongoose.Schema({
    Name: String,
    Image: String,
    Cost: Number,
    Mota: String
});

module.exports = mongoose.model("product", schemaSp);