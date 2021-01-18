const express = require('express');
const app = express();
const mongoose = require('mongoose')
const port = 5000;
require('dotenv').config()

// mongodb
mongoose.connect(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
mongoose.connection.on('connected', () => {
	console.log('connected to mongodb')
})

// registering models
require('./routes/blog')
require('./routes/user')

// app specific
app.use(express.json())

//routes
app.use(require('./routes/auth'))

app.listen(port, () => {
	console.log("Server Started!");
})