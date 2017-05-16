/**
 * Created by Suraj on 5/15/2017.
 */
var express = require('express');
var router = express.Router();
var Cart = require('../modals/cart');
var Order = require('../modals/order');
var Book = require('../modals/book');
var error = "";

router.get('/', ensureAuthenticated, function (req, res) {
    res.render('payment',{
        error : error
    });
});

router.post('/', function (req, res) {
    var ccnumber = req.body.creditcard;
    var total = 0;
    var books = [];

    if(ccnumber == "0"){
        var cartId = "";
        error = "";
        Cart.getCart(req.user._id, function (err, cart) {
            if(err) throw err;
            cartId = cart._id;


            for(var i =0; i<cart.products.length; i++){

                Book.getBookByID(cart.products[i].product, function (err, book) {
                    books.push(book.title);
                    total = total + parseFloat(book.price);

                });

            }

        });
        setTimeout(function (){
            Cart.emptyCart(cartId, function (err, cart) {
                if (err) throw err;

            });
            total = Math.round(total*100)/100;
            var newOrder = new Order({
                orderOf: req.user._id,
                products : books,
                price : total.toString()
            });
            Order.addOrder(newOrder, function (err, order) {
                if(err) throw err;

            });
            res.render('paymentconfirm');
        },2000);

    }else{
        res.render('payment',{
            error: "Invalid Card Number"
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