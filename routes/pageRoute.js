var express = require('express');
var router = express.Router();
var sp = require("../models/sanpham");

router.get('/', function (req, res) {
    sp.find(function(err, data){
        if(err){
            res.json(err);
        }
        else{
            res.render('home', { title: "Trang chu", danhsach: data });
        }
    });
});
router.get('/dangnhap', function (req, res) {
    res.render('sign_in', { title: "Dang nhap" });
});
router.get('/dangki', function (req, res) {
    res.render('dangki', { title: "Dang ki tai khoan" });
});

module.exports = router;
