const express = require('express')
const mongoose = require('mongoose')
const cors = reqiure('cors')

const app = express()
app.use(cors())
app.use(express.json)


app.listen(3001, () => {
    console.log("SERVER IS RUNNING!")
})