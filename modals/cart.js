/**
 * Created by Suraj on 5/7/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cartSchema = Schema({
    cartOf :{
        type: mongoose.Schema.Types.ObjectId,
        referenceBy: 'User'
    },
    products:[
        {
            quantity: Number,
            product:{
                type: mongoose.Schema.Types.ObjectId,
                referenceBy: 'Book'
            }
        }
    ]
});

var Cart = module.exports = mongoose.model('Cart', cartSchema);

module.exports.getCart = function (userId, callback) {
    var query = {cartOf: userId};
    Cart.findOne(query, callback);
};

module.exports.addCart = function (newCart, callback) {
    newCart.save().then(function (err, result) {
        return result;
    });
};

module.exports.addBookToCart = function (cartId, bookId, callback) {
    var prod = {"quantity" : 1, "product": bookId};
    Cart.findOne(cartId).exec(function (err, cart) {
        cart.products.push(prod);
        cart.save(callback);
    });
};

module.exports.removeBookFromCart = function (cartId, index, callback) {
    Cart.findOne(cartId).exec(function (err, cart) {
         cart.products.splice(index,1);
         cart.save(callback);
    });
};

module.exports.emptyCart = function (cartId, callback) {
    Cart.findOne(cartId).exec(function (err, cart) {
        if(err) throw err;
        for(var i = cart.products.length - 1; i >= 0; i--) {
                cart.products.splice(i, 1);

        }
        cart.save(callback);
    });
};

