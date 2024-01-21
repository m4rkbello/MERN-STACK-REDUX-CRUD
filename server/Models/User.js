const mongoose = require('mongoose')


//schema
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})


const UserModel = mongoose.model("admin", UserSchema)

module.exports = UserModel;