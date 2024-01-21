const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
//import
const UserModel = require('./Models/User')



const app = express()
app.use(cors())
app.use(express.json)

//connection sa mongoDB
mongoose.connect('mongodb://localhost:27017/admin');

app.get('/', (req, res) ={
    UserModel.find()
    .then(users => res.json(users))
    .catch(err => express.json(err))
})

app.listen(3001, () => {
    console.log("SERVER IS RUNNING!");
});