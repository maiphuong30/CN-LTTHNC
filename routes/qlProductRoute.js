var express = require('express');

var router = express.Router();

var ctl = require("../controllers/admin.controller");
var sp = require("../models/sanpham");

router.get('/', function (req, res) {
    sp.find(function (err, data) {
        if (err) {
            res.json(err);
        }
        else {
            res.render('adminpage/qlsanpham', { title: "Quan li san pham", danhsach: data });
        }
    });
});
//Them

router.get('/add', function (req, res) {
    res.render('adminpage/add', { title: "Them san pham"});
});
router.post('/add', ctl.savetodb);
router.get('/edit/:id', function (req, res) {
    sp.findById(req.params.id, function (err, data) {
        if (err) {
            res.json(err);
        }
        else {
            console.log(data)
            res.render('adminpage/edit', { title: "Sua san pham", form: "./edit", sanpham: data });
        }
    });
});
router.post('/edit');

module.exports = router;
