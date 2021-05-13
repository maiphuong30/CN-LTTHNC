var express = require('express');
var router = express.Router();
var sp = require("../models/sanpham");
var dm = require("../models/danhmuc");
router.get('/', function (req, res) {
    dm.find(function(err, data1){
        if(err){
            res.json(err);
        }
        else{
            sp.find(function(err, data2){
                if(err){
                    res.json(err);
                }
                else{
                    res.render('page/home', { title: "Trang chu", danhsach: data2, danhmuc: data1});
                }
            });
        }
    });  
});
router.get('/search', function (req, res) {
    var f = req.query.f;
    sp.find({Name: f}, function(err, data){
        if(err){
            res.json(err);
        }
        else{
            res.render('page/home', { title: "Trang chu", danhsach: data });
        }
    });
});
router.get('/detail/:id', function (req, res) {
    res.render('page/product_detail', { title: "Chi tiet san pham" });
});
router.get('/dangnhap', function (req, res) {
    res.render('page/sign_in', { title: "Dang nhap" });
});
router.get('/dangki', function (req, res) {
    res.render('page/dangki', { title: "Dang ki tai khoan" });
});

module.exports = router;
