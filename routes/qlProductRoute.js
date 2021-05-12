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
            res.render('adminpage/qlsanpham', { title: "Quan li san pham",page:"table_sp", danhsach: data });
        }
    });
});
//Them

router.get('/add', function (req, res) {
    res.render('adminpage/qlsanpham', { title: "Them san pham",page:"form_add"});
});
router.post('/add', ctl.savetodb);
//Sua
router.get('/edit/:id', function (req, res) {
    sp.findById(req.params.id, function (err, data) {
        if (err) {
            res.json(err);
        }
        else {
            console.log(data)
            res.render('adminpage/qlsanpham', { title: "Sua san pham", page:"form_edit", sanpham: data });
        }
    });
});
router.post('/edit/:id', ctl.upd);
//Sua
router.get('/delete/:id', ctl.del);
module.exports = router;
