const express = require('express');
const Teams = require('../../model/Teams');
const router = express.Router();
const jwt = require('jsonwebtoken');
const key = require('../../config/keys').secret;




/**
 * @route POST api/teams/create
 * @desc Create the team
 * @access Private
 */

router.post('/create', (req, res) => {
    let { name, members } = req.body


    // Check for the unique team username
    Teams.findOne({name : name
    }).then(teams => {
        if (teams){
            return msg.status(400).json({
                msg : "The name of the team is already taken"
            });
        }
    });

    // Check if the member is already in the team
    Teams.findOne({members : members
    }).then(teams => {
        if (teams){
            return msg.status(400).json({
                msg : "The members is already in the team"
            });
        }
    });

    let newTeam = new Teams({
        name,
        members
    })

    // Save the team
    newTeam.save().then(teams => {
        return res.status(201).json({
            success : true,
            msg : "The team is now created"
        })
    })
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

module.exports = router;