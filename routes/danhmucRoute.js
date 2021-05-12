var express = require('express');

var router = express.Router();

var dm = require("../models/danhmuc");
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.get('/', function (req, res) {
    dm.find(function (err, data) {
        if (err) {
            res.json(err);
        }
        else {
            res.render('adminpage/qldanhmuc', { title: "Quan li san pham", danhsach: data });
        }
    });
});
//Them

router.get('/add', function (req, res) {
    res.render('adminpage/addDm', { title: "Them danh muc"});
});
router.post('/add', function (req, res) {
    var danhmuc = new dm({
        Title: req.body.tendm,
        List: []
    });
    danhmuc.save(function (err) {
        if (err) {
            res.json({ "kq": 0, "errMsg": err });
        } else {
            res.redirect('/admin/danhmuc');
        }
    })
});
//Sua
router.get('/edit/:id', function (req, res) {
    dm.findById(req.params.id, function (err, data) {
        if (err) {
            res.json(err);
        }
        else {
            console.log(data)
            res.render('adminpage/editDm', { title: "Sua danhmuc", danhmuc: data });
        }
    });
});
router.post('/edit/:id', function (req, res) {
    dm.updateOne({ _id: req.params.id }, {
        Title: req.body.tendm
    }, function(err){
        if(err){
            res.json({ "kq": 0, "errMsg": err });
        }else{
            res.redirect('/admin/danhmuc');
        }
    });   
});
router.get('/delete/:id',function (req, res) {
    dm.deleteOne({_id: req.params.id}, function(err){
        if (err) {
            res.json(err);
        }  
    })
    res.redirect('/admin/danhmuc');
});
module.exports = router;
