const mongoose = require ("mongoose");

mongoose.connect("mongodb+srv://mairalourencodev:dO2GZOATVXUcuRnF@admin.o7uqqi6.mongodb.net/delas")

let db = mongoose.connection;

module.exports = db;


