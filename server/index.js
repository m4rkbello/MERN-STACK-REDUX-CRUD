const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
//import user model 
const UserModel = require('./Models/User')



const app = express()
app.use(cors());
app.use(express.json())

//connection sa mongoDB
mongoose.connect('mongodb://localhost:27017/crud');
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});


app.get('/', (req, res) => {
    UserModel.find()
        .then(users => {
            console.log(users); // Log the fetched data
            res.json(users);
        })
        .catch(err => res.json(err))
});

app.listen(3000, () => {
    console.log("SERVER IS RUNNING!");
});