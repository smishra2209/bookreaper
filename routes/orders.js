/**
 * Created by Suraj on 5/15/2017.
 */
var express = require('express');
var router = express.Router();
var Order = require('../modals/order');

router.get('/', ensureAuthenticated, function (req, res) {

    Order.getOrders(req.user._id, function (err, orders) {

        res.render('orders',{
            orders: orders
        });
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