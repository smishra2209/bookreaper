/**
 * Created by Suraj on 5/13/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var imgSchema = Schema({
    img: {
        data: Buffer,
        contentType: String
    }
});

var Image = module.exports = mongoose.model('Img', imgSchema);

module.exports.saveImage = function (image, callback) {
    image.save(callback);
};

module.exports.getImageById = function (id, callback) {
    Image.findOne({_id: id},callback);
};