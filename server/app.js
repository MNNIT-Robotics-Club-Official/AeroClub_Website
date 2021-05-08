const { request } = require("express");
const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const port = process.env.PORT || 9500;
require("dotenv").config();

// app specific
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

// mongodb
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
mongoose.connection.on("connected", () => {
  console.log("connected to mongodb");
});

//My routes
const authRoutes = require("./routes/auth");
const blogRoutes = require("./routes/blog");
const componentRoutes = require("./routes/component");
const issueRoutes = require("./routes/issue");
const userRoutes = require("./routes/user");
const projectRoutes = require("./routes/project");
const newsRoutes = require("./routes/news");
const workshopRoutes = require("./routes/workshop");
const achievementRoutes = require("./routes/achievement");
const contactRouters = require("./routes/contact");
const shareRouter = require("./routes/shareProj");

//Adding routes to the app
app.use("/api", authRoutes);
app.use("/api", blogRoutes);
app.use("/api", componentRoutes);
app.use("/api", issueRoutes);
app.use("/api", projectRoutes);
app.use("/api", newsRoutes);
app.use("/api", userRoutes);
app.use("/api", workshopRoutes);
app.use("/api", achievementRoutes);
app.use("/api", contactRouters);
app.use("/api", shareRouter);

app.use(express.static("client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server Started at ${port}`);
});
