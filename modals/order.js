/**
 * Created by Suraj on 5/14/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = Schema({
    orderOf:{
        type: mongoose.Schema.Types.ObjectId,
        referenceBy: 'User'
    },
    products:[
        {
            type: String
        }
    ],
    price:{
        type: String
    }
});

var Order = module.exports = mongoose.model('Order', orderSchema);

module.exports.getOrders = function (userId, callback) {
    var query ={orderOf: userId};
    Order.find(query,callback);
};

module.exports.addOrder = function (newOrder, callback) {
    newOrder.save(callback);
};