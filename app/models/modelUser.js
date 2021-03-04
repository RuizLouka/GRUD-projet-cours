const confDB = require('../config/confDB');

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const users = mongoose.model("users",
    mongoose.Schema({
        firstName: String,
        lastName: String,
        userName: String,
        mail: String,
        role: String,
        civilite: String,
        photo: String,
        dateNaissance: Date,
        location: {
            lattitude: Number,
            longitude: Number
        }
    })
);

const dataBase = {
    mongoose: mongoose,
    url: confDB.url,
    users: users
};

module.exports = dataBase;