const express = require('express');

const app = express();

const hostname = 'localhost';
const port = 3000;

//Router
router = require("./modules/router");
app.use("/", router);
app.listen(port, () => {
	console.log("Server Started!");
})