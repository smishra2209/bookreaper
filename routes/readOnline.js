/**
 * Created by Suraj on 5/15/2017.
 */
var express = require('express');
var router = express.Router();

router.post('/', ensureAuthenticated, function (req, res) {
    var readlink = req.body.booklink;
    res.render('readOnline',{
        readlink : readlink
    });
});

function ensureAuthenticated (request, response, next){
    if(request.isAuthenticated()){
        return next();
    }else{
        response.render('home');
    }
};

module.exports = router;