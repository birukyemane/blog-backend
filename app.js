const fs = require("fs");
const path = require("path");

const express = require("express");
const morgan = require("morgan");
const favicon = require("serve-favicon");
const mongoose = require('mongoose');
const cors = require('cors');

const blogsRouter = require("./routers/blogsRouter");

// 2. init
(async function () {
  try {
      await mongoose.connect('mongodb+srv://biryem:tNBLpsePnWnNZP3R@cluster0.yddixvj.mongodb.net/test?retryWrites=true&w=majority')
      console.log(`connected to DB`)
  } catch (e) {
      console.log(`Error connecting to DB`, e)
  }
})();
const app = express();

//3. setup = configure app settings
app.disable("x-powered-by");

//4. middleware
app.use(favicon(path.join(__dirname, "images", "favicon.ico")));
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  { flags: "a" }
);
app.use(morgan("dev", { stream: accessLogStream }));
app.use(express.json());
app.use(cors());

// 5. routing
app.use("/blogs", blogsRouter);

app.all("*", (req, res, next) => {
  next(new Error("No route found"));
});

//6. error handle
app.use((error, req, res, next) => {
  res.status(500).json({ success: false, data: error.message });
});

// 7. bootstrap
app.listen(3000, () => console.log(`listening on 3000`));
