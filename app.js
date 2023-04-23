const fs = require("fs");
const path = require("path");

const express = require("express");
const morgan = require("morgan");
const favicon = require("serve-favicon");

//const mealsRouter =  require('./routers/mealsRouters');

// 2. init
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

// 5. routing
// app.use('/meals', mealsRouter);

app.all("*", (req, res, next) => {
  next(new Error("No route found"));
});

//6. error handle
app.use((error, req, res, next) => {
  res.status(500).json({ success: false, data: error.message });
});

// 7. bootstrap
app.listen(3000, () => console.log(`listening on 3000`));
