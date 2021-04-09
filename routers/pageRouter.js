var express = require('express');
var path = require('path');
var router = express.Router();

//body-parser
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));

//multer
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname)
    }
});
var upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        console.log(file);
        //Kiem tra file nao dc upload
        if (file.mimetype == "image/bmp" || file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" || file.mimetype == "image/gif") {
            cb(null, true)
        } else {
            return cb(new Error('Only image are allowed!'))
        }
    }
}).single("spImage");

router.use(express.static("public"));

router.get('/', function (req, res) {
    res.render('home', { title: "Trang chu" });
});
router.get('/dangnhap', function (req, res) {
    res.render('sign_in', { title: "Dang nhap" });
});
router.get('/dangki', function (req, res) {
    res.render('dangki', { title: "Dang ki tai khoan" });
});
router.get('/admin', function (req, res) {
    res.render('quanli', { title: "Quan li san pham" });
});
//Them
var sp = require("../models/sanpham");
router.get('/add', function (req, res) {
    res.render('add', { title: "Them san pham" });
});
router.post('/add', function (req, res) {
    //Upload file
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            res.json({ "kq": 0, "errMsg": "A Multer error occurred when uploading." });
        } else if (err) {
            res.json({ "kq": 0, "errMsg": "An unknown error occurred when uploading." + err });
        } else {
            //save Mongo chua hoan thanh
            var sanpham = sp({
                Name: req.body.tensp,
                Image: req.file.filename,
                Cost: req.body.txtgia
            });
            sanpham.save(function(err){
                if(err){
                    res.json({"kq":0, "errMsg":err});
                }else{
                    res.json({"kq":1})
                }
            });
        }

    });
});
module.exports = router;
