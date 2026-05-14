var mongoose = require('mongoose');
var crypto = require('crypto');

var userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  hashedPassword: { type: String },
  salt: { type: String },
  created: { type: Date, default: Date.now }
});

userSchema.virtual('password').set(function(password) {
  this.salt = Math.random() + '';
  this.hashedPassword = this.encryptPassword(password);
});

userSchema.methods.encryptPassword = function(password) {
  return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
};

userSchema.methods.checkPassword = function(password) {
  return this.encryptPassword(password) === this.hashedPassword;
};

module.exports = mongoose.model('User', userSchema);
