const express = require('express');
const app = express();
const mongoose = require('mongoose')
const port = 5000;
require('dotenv').config()

// mongodb
mongoose.connect(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true
})
mongoose.connection.on('connected', () => {
	console.log('connected to mongodb')
})

//My routes
const authRoutes = require("./routes/auth");
const blogRoutes = require("./routes/blog");
const componentRoutes = require("./routes/component")

// app specific
app.use(express.json())

//Adding routes to the app
app.use("/api", authRoutes);
app.use("/api", blogRoutes);
app.use("/api", componentRoutes);

app.listen(port, () => {
	console.log(`Server Started at ${port}`);
})