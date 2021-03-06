/**
 * Created by Suraj on 5/4/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');

//User model/schema
var UserSchema = Schema({
    username:{
        type: String,
        index: true
    },
    password:{
        type: String
    },
    email:{
        type: String
    },
    name:{
        type: String
    },
    address:{
        type: String
    },
    cellphone:{
        type: String
    },
    interests:{
        type: String
    }
});

//Export Schema in User
var User = module.exports = mongoose.model('User', UserSchema);

//Create User module
module.exports.createUser = function (newUser, callback) {
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(newUser.password, salt, function (err, hash) {
            newUser.password = hash;
            newUser.save(callback);
        });
    });
};

//Change Password
module.exports.changePassword = function (userId, newPassword, callback) {
    User.findOne(userId).exec(function (err, user) {
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(newPassword, salt, function (err, hash) {
                if (err) throw err;
                user.password = hash;
                user.save(callback);
            });
        });
    });
};

//Export Get User by Username module
module.exports.getUserByUsername = function (username, callback) {
    var query = {username: username};
    User.findOne(query,callback);
};

//Export compare password module
module.exports.comparePassword = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
        if(err){
            throw err;
        }
        callback(null, isMatch);
    });
};

module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
};

module.exports.updateImage = function (imgId,id, callback) {
    var query = {_id: id};
    User.update(query, {$set: {imgId: imgId}}, callback);
};

module.exports.updateUser =  function (user, callback) {
    var query = {_id: user._id};
    User.updateMany(query,
        {$set: {
            name: user.name,
            username: user.username,
            address: user.address,
            cellphone:user.cellphone,
            email: user.email,
            interests: user.interests
        }}, callback);
};