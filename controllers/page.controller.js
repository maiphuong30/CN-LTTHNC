var sp = require("../models/sanpham");
var dm = require("../models/danhmuc");
module.exports.index = function (req, res) {
    var perpage = 3;
    var page = req.query.page || 1;
    var skip = (page - 1) * perpage;
    dm.find(function (err, data1) {
        if (err) {
            res.json(err);
        }
        else {
            sp.find().skip(skip).limit(perpage).exec(function (err, data2) {
                sp.countDocuments((err, count) => {
                    if (err) {
                        res.json(err);
                    }
                    else {
                        res.render('page/home', {
                            title: "Trang chu", page: "homepage",
                            current: page,
                            pages: Math.ceil(count / perpage),
                            danhsach: data2, danhmuc: data1
                        });
                    }
                });
            });
        }
    });
};
module.exports.search = function (req, res) {
    var f = req.query.f;
    var perpage = 3;
    var page = req.query.page || 1;
    var skip = (page - 1) * perpage;
    dm.find(function (err, data1) {
        if (err) {
            res.json(err);
        }
        else {
            sp.find({Name:{$regex: f}}).skip(skip).limit(perpage).exec(function (err, data2) {
                sp.countDocuments((err, count) => {
                    if (err) {
                        res.json(err);
                    }
                    else {
                        res.render('page/home', {
                            title: "Trang chu", page: "listsp",
                            current: page,
                            pages: Math.ceil(count / perpage),
                            danhsach: data2, danhmuc: data1
                        });
                    }
                });
            });
        }
    });
};