const mongoose = require("mongoose");
 
const Schema = mongoose.Schema;
// установка схемы
const blogScheme = new Schema({
    title: String,
    description: String,
    author: String
});

module.exports = mongoose.model("Blog", blogScheme);