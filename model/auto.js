var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var AutoSchema = Schema(
  {
    marca:String,
    submarca:String,
    modelo:Number,
    color:String,
    foto:String
  }
);
module.exports = mongoose.model('Auto',AutoSchema);
