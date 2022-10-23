const mongoose = require("mongoose");
 
const Schema = mongoose.Schema;
// установка схемы
const userScheme = new Schema({
    name: String,
    password: String,
});

module.exports = mongoose.model("User", userScheme);