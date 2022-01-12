// Creating schema to be able to create an account

const mongoose = require("../database");
 
var userSchema = new mongoose.Schema({
            name: String,
            password: String,
            email:String
        });
 
var userModel=mongoose.model('user',userSchema);
 
module.exports = mongoose.model("user", userModel);

