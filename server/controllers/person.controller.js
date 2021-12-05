const { response } = require('express');
const Person = require('../models/person.model');

// breaking out the exports for less typing on this
module.exports = {
    index: (req, res) => {
        res.json({ message: "Hello World" });
    },
    
    createPerson: (req, res) => {
        // deconstructing the first and last name from the request body
        const { firstName, lastName } = req.body;
        Person.create({
            firstName,
            lastName,
        })
        .then((person) => res.json(person))
        // trying a method for error messages I learned in class.
        .catch((err) => res.status(400).json({ errMessage: err }));
    }


}