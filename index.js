const express = require("express");

const app = express();

// const tourRoutes = require("./routes/tourRoutes");

app.use(express.json());

// app.use("/api", tourRoutes);

// const middleware = (req, res, next) => {
//   console.log("Middleware executed");
//   next();
// }

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
}

app.use(logger);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});