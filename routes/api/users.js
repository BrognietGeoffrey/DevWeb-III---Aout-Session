const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const key = require('../../config/keys').secret;
const passport = require('passport');
const User = require('../../model/User')

/**
 * @route POST api/users/register
 * @desc Register the User
 * @access Public
 */

router.post('/register', async(req, res) => {
    let { name, username, email, password, confirm_password} = req.body
    if(password !== confirm_password) {
        return res.status(400).json({
            msg : "Password do not match."
        });
    }

    // Check for the unique username
    User.findOne({username : username
    }).then(user => {
        if (user){
            return res.status(400).json({
                msg : "Username is already taken."
            });
        }
    });
    // Check for the unique email
    User.findOne({email : email
    }).then(User => {
        if (User){
            return res.status(400).json({
                msg : "Email is already registered. Did you forgot your password ?"
            });
        }
    });

    // The data is valid and new, we can register the user
    let newUser = new User({
        name,
        username,
        password,
        email
    });

    // Hash the password
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save().then(user => {
                return res.status(201).json({
                    success : true,
                    msg : "User is now registered"
                });
            });
        });
    });
});

/**
 * @route POST api/users/login
 * @desc SignIn the User
 * @access Public
 */

router.post('/login', (req, res) => {
    User.findOne( {username : req.body.username}).then(user =>{
        if(!user){
            return res.status(404).json({
                msg: "Username is not found.",
                succes:false
            })
        }
        // If there is an user we are now going to compare the paswword
        bcrypt.compare(req.body.password, user.password).then(isMatch => {
            if(isMatch){
                // User's password is correct and we need to send the JSON Token for that user
                const payload = {
                    _id : user._id,
                    usename : user.username,
                    name : user.name,
                    email : user.email
                }
                jwt.sign(payload, key, {
                    expiresIn: 604800
                }, (err, token) => {
                    res.status(200).json({
                        success : true,
                        user: user,
                        token : `Bearer ${token}`,
                        msg : "You are now log in"
                    })
                })
            }
            else {
                return res.status(404).json({
                    msg:"Incorrect password",
                    success:false
                });
            }
        })
    });
});

/**
 * @route POST api/users/profile
 * @desc Return the User's profile
 * @access Private
 */
router.get('/profile', passport.authenticate('jwt', {
    session : false
}), (req, res) => {
    return res.json({
        user : req.user
    });
});



module.exports = router;
