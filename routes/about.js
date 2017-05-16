var express = require('express');
var router = express.Router();
var Book = require('../modals/book');
var Cart = require('../modals/cart');
var Review = require('../modals/review');
var uuid = require('node-uuid');

router.get('/',ensureAuthenticated, function(req, res){
    res.render('about');   
});

function ensureAuthenticated (request, response, next){
    if(request.isAuthenticated()){
        return next();
    }else{
        response.render('home');
    }
};

module.exports=router;