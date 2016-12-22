var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = mongoose.Schema.Types.ObjectId
  , autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose);
userSchema = new Schema( {
  id :  { type: Number, required: true},
  username: String,
  password: String
})

userSchema.plugin(autoIncrement.plugin, {model: 'user', field: 'id'});
User = mongoose.model('user', userSchema);
module.exports = User;
