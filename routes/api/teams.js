const express = require('express');
const Teams = require('../../model/Teams');
const router = express.Router();
const jwt = require('jsonwebtoken');
const key = require('../../config/keys').secret;
const passport = require('passport');




/**
 * @route POST api/teams/create
 * @desc Create the team
 * @access Private
 */

 router.post('/register', async(req, res) => {
    let { name, members } = req.body
    if(name == "") {
        return res.status(400).json({
            msg : "Please choose a name."
        });
    }

    // Check for the unique username
    Teams.findOne({name : name
    }).then(teams => {
        if (teams){
            return res.status(400).json({
                msg : "Name is already taken."
            });
        }
    });
    // Check for the unique email
    Teams.findOne({members : members
    }).then(teams => {
        if (teams){
            return res.status(400).json({
                msg : "Username is already in the teams"
            });
        }
    });

    // The data is valid and new, we can register the user
    let newTeams = new Teams({
        name,
        members
    });


    newTeams.save().then(teams => {
        return res.status(201).json({
            success : true,
            msg : "Team is now registered"
        });
    });
});

/**
 * @route UPDATE api/teams/join
 * @desc Join the team
 * @access Private
 */

router.route("/join").put(function(req, res) {
    let { name, members } = req.body

    Teams.updateOne({name: name }, {$push: { members: [members]}, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.json(result);
        }
    }
})
});


/**
 * @route POST api/teams/team
 * @desc Return the team's profile
 * @access Private
 */
 router.get('/info', passport.authenticate('jwt', {
    session : false
}), (req, res) => {
    return res.json({
        user : req.teams
    });
});

module.exports = router;