const { request } = require('express');
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
const componentRoutes = require("./routes/component");
const issueRoutes = require("./routes/issue");
const userRoutes = require("./routes/user");
const projectRoutes = require("./routes/project");
const newsRoutes = require('./routes/news')

// app specific
app.use(express.json())

//Adding routes to the app
app.use("/api", authRoutes);
app.use("/api", blogRoutes);
app.use("/api", componentRoutes);
app.use("/api", issueRoutes);
app.use("/api", projectRoutes);
app.use('/api', newsRoutes);
app.use('/api', userRoutes);


app.listen(port, () => {
	console.log(`Server Started at ${port}`);
})