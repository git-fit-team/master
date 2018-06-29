const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

// Register
router.post('/register', (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    age: req.body.age,
    weight: req.body.weight,
    goalWeight: req.body.goalWeight,
    height: req.body.height,
    activityLevel: req.body.activityLevel,
    gender: req.body.gender
  });

  User.addUser(newUser, (err, user) => {
    if(err){
      res.json({success: false, msg:'Failed to register user'});
    } else {
      res.json({success: true, msg:'User registered'});
    }
  });

  User.find({ 'username': username,'email':email }, function(err, user) {
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
  });

});

// Authenticate
router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg: 'User not found'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
        const token = jwt.sign({data: user}, config.secret, {
          expiresIn: 604800 // 1 week
        });

        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email,
            age: user.age,
            weight: user.weight,
            goalWeight: user.goalWeight,
            height: user.height,
            activityLevel: user.activityLevel,
            gender: user.gender,
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});

module.exports = router;
