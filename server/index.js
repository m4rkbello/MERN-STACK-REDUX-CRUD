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

//fetch data
app.get('/', (req, res) => {
  UserModel.find()
    .then(users => {
      console.log("RETURN OY", users); // Log the fetched data
      res.setHeader('Content-Type', 'application/json');
      res.json(users);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});


//add data
app.post('/create', (req, res) => {
  UserModel.create(req.body)
  .then(user => res.json(user))
  .catch(err => res.json(err))
})


app.listen(3000, () => {
    console.log("SERVER IS RUNNING!");
});