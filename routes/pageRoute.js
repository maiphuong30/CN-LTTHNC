var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('home', { title: "Trang chu" });
});
router.get('/dangnhap', function (req, res) {
    res.render('sign_in', { title: "Dang nhap" });
});
router.get('/dangki', function (req, res) {
    res.render('dangki', { title: "Dang ki tai khoan" });
});

module.exports = router;
