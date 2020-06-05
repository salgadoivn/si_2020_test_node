var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ComicSchema = Schema(
  {
    nombre:String,
    imagen:String,
    poderes: String
  });

module.exports = mongoose.model( 'Comic', ComicSchema );
