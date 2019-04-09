let express = require('express');
let router = express.Router();
let RSVPCollection = require('../models/RSVPSchema');

// Return the list of all the current RSVPs
router.get('/', function (req, res) {
    console.log(`LIST RSVPS`);
    RSVPCollection.find({}, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    })
});

//Create a new RSVP -IMPLEMENT YOUR OWN FUNCTION
router.post('/', function (req, res) {
    RSVPCollection.create({
        rsvp_person:req.body.rsvp_person,
        rsvp_going:req.body.rsvp_going,
    },(errors) => {
        if(errors) res.send(errors);
        else res.send('created')
    })
});

// Get a specific RSVP
router.get('/:id', function (req, res, next) {
    console.log(`LIST RSVP ${req.params.id}`);
    RSVPCollection.findOne({_id: req.params.id}, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    })
});

// Update an existing RSVP
router.put('/:id', function (req, res) {
    console.log(`UPDATE RSVP ${req.body.rsvp_person} ${req.body.rsvp_going}`);
    RSVPCollection.findOneAndUpdate({_id: req.params.id}, req.body, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    });
});

// Delete a specific RSVP
router.delete('/', function (req, res) {
    RSVPCollection.deleteOne({_id: req.body},(errors, results) => {
        errors ? res.send(errors) : res.send(results);
    });
});

module.exports = router;
