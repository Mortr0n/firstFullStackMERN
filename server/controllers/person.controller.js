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
    },

    getAllPeople: (req, res) => {
        Person.find()
            .then((persons) => {
                console.log(persons);
                res.json(persons);
            })
            .catch(err => res.json(err))
    },

    getOnePerson: (req, res) => {
        Person.findOne({ _id: req.params.id })
            .then((onePerson) => {
                console.log(onePerson);
                res.json(onePerson);
            })
            .catch((err) => res.status(400).json(err));
    },

    updatePerson: (req, res) => {
        Person.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true },
        )
            .then((updatedPerson) => {
                res.json(updatedPerson)
            })
            .catch((err) => res.status(400).json({ errMessage: err }));
    },

    deletePerson: (req, res) => {
        Person.findOneAndDelete({ _id: req.params.id })
            .then((personToDelete) => res.json(personToDelete))
            .catch((err) => res.status(400).json({ errMessage: err }));
    },
}