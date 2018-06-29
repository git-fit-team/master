const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const UserSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  age: {
    type: String
  },
  weight: {
      type: String
  },
  goalWeight: {
      type: String
  },
  height: {
      type: String
  },
  activityLevel: {
      type: String
  },
  gender: {
      type: String
  }
});

const User = module.exports = mongoose.model('User', UserSchema);

/*module.exports.checkDB = User.find({ 'username': username,'email':email }, function(err, user) {

  if (err) {
    console.log('Signup error');
    return done(err);
  }
  
  //if user found.
  if (user.length!=0) {
    if(user[0].username){
      console.log('Username already exists, username: ' + username);                         
  } else{
      console.log('EMAIL already exists, email: ' + email);      
  }                                    
  var err = new Error();
  err.status = 310;
  return done(err);
  }
}) */

module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback){
  const query = {username: username}
  User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback){
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
}
