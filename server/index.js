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


//add data sa serverside
app.post('/create', (req, res) => {
  UserModel.create(req.body)
  .then(user => res.json(user))
  .catch(err => res.json(err))
})


//update data sa serverside
app.put('/update/:id', (req, res) => {
  //kuhaon ang id na gi click gamit params
  const id = req.params.id;
  UserModel.findByIdAndUpdate({_id: id}, {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age
    
  }).then(user => res.json(user))
  .catch(err => res.json(err))
})


app.delete('/delete/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete(id)
    .then(response => res.json(response))
    .catch(err => res.json(err))
});



app.listen(3000, () => {
    console.log("SERVER IS RUNNING!");
});