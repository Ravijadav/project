var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var consumerSchema = new Schema({
   fname:String,
   lname:String,
   userName:String,	
   password:String,
   location:String,
   city:String,
   email:String,
   interestCategory1:String,
   interestSubCategory1:String,
   interestCategory2:String,
   interestSubCategory2:String,
   interestCategory3:String,
   interestSubCategory3:String
});
module.exports = mongoose.model('consumer',consumerSchema);          
