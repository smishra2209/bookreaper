/**
 * Created by Suraj on 5/3/2017.
 */
var homeRoute = require('./home');
var shopRoute = require('./shop');
var bookRoute = require('./book');
var profileRoute = require('./profile');
var cartRoute = require('./cart');
var paymentRoute = require('./payment');
var orderRoute = require('./orders');
var readOnlineRoute = require('./readOnline');
var accountRoute = require('./account');
var aboutRoute = require('./about');

var constructorMethod = function(app){

    app.use("/", homeRoute);
    app.use("/shop",shopRoute);
    app.use("/book",bookRoute);
    app.use("/profile",profileRoute);
    app.use("/cart", cartRoute);
    app.use("/payment", paymentRoute);
    app.use("/orders", orderRoute);
    app.use("/readOnline", readOnlineRoute);
    app.use("/account", accountRoute);
    app.use("/about", aboutRoute);
    app.use("*", function(request,response){
        response.send(404);
        console.log("BAD REQUEST!");
    });
};


module.exports = constructorMethod;