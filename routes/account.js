/**
 * Created by Suraj on 5/15/2017.
 */
var express = require('express');
var router = express.Router();
var User = require('../modals/user');

router.get('/',ensureAuthenticated, function (req, res) {
    res.render('account');
});

router.post('/', function (req, res) {
    var newpass = req.body.newpass;
    var connewpass =req.body.connewpass;
    if (newpass!=connewpass){
        var error = "Passwords do not match!";
        res.render('account',{
            error: error
        });
    }else{
        User.changePassword(req.user._id, newpass, function (err, user) {
            if (err) throw err;

            setTimeout(function () {
                res.redirect('/shop');
            },1000);
        });
    }

});

function ensureAuthenticated (request, response, next){
    if(request.isAuthenticated()){
        return next();
    }else{
        response.render('home');
    }
};

module.exports = router;