const mongoose = require("mongoose");

const RegisterSchema = mongoose.Schema({
    carnet:String,
    schedule: String,
    isLate: Boolean


});

module.exports = mongoose.model("Register",RegisterSchema)
