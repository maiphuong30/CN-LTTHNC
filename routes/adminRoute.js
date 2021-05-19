var express = require('express');

var router = express.Router();


router.get('/', function (req, res) {
    res.render('adminpage/quanly', { title: "Quản lí", page: "welcome" });
});
module.exports = router;