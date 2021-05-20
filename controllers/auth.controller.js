module.exports.login = function (req, res) {
    res.render('adminpage/login', { title: "Login"});
}
module.exports.postLogin = function (req, res) {
    var username = req.body.username;
    if(username=='phuong'){
        res.cookie('user', username);
        res.redirect('/admin');
    }
}