/**
 * Created by Suraj on 5/14/2017.
 */
var express = require('express');
var router = express.Router();
var Book = require('../modals/book');
var Cart = require('../modals/cart');
var cartMain = "";
var cartCount = 0;
var user = "";

router.get('/', ensureAuthenticated, function (req, res) {
    user = req.user;
    var product = [];
    var total = 0;
    Cart.getCart(req.user._id, function (err, cart) {
        req.cart = cart;
        cartMain = cart;
        var bookList = cart.products;

        for(var i =0; i<cart.products.length;i++){
            var id = cart.products[i].product;

            Book.getBookByID(id, function (err, book) {
                if(err) throw err;

                product.push(book);
                total = total + parseFloat(book.price, 10);

            });
        }
    });

    setTimeout(function () {
        total = Math.round(total*100)/100;

        res.render('cart',{
            books: product,
            total: total
        });
    },2000);
});

router.get('/removeBook', function (req, res) {

    Cart.removeBookFromCart(cartMain._id, req.query.index, function (err, result) {
        if(err) throw err;

        res.redirect('/cart');
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