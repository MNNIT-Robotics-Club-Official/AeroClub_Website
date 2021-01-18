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
require('./models/user')
require('./models/blog')

// app specific
app.use(express.json())

//routes
app.use(require('./routes/auth'))
app.use(require('./routes/blog'))

app.listen(port, () => {
	console.log("Server Started!");
})