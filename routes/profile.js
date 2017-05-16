/**
 * Created by Suraj on 5/13/2017.
 */
var express = require('express');
var router = express.Router();
var fs = require('fs');
var Image = require('../modals/img');
var User = require('../modals/user');
var user = null;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

router.get('/', ensureAuthenticated, function (req, res) {
    user = req.user;

    res.render('profile',{
        user: user
    });
});

router.post('/', function (req,res) {

    var errors = [];
    if(req.body.name === ""){
        errors.push("Name is mandatory");
    }
    if(req.body.username === ""){
        errors.push("Username is mandatory");
    }
    if(req.body.email === ""){
        errors.push("Email is mandatory");
    }
    if(errors.length>0){
        res.render('profile',{
            error: errors
        });
    }else{
        var newUser = new User({
            _id: user._id,
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            address: req.body.address,
            cellphone: req.body.cellphone,
            interests: req.body.interests
        });
        User.updateUser(newUser, function (err, user) {
            if(err) throw err;
            setTimeout(function () {
                res.redirect('/shop');
            },2000);

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