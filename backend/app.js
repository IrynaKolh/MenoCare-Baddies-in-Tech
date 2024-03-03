require('dotenv').config();
require('express-async-errors');
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");
const express = require("express");
const connectDb = require("./db/connect");
const authRouter = require("./routes/auth");
const authMiddleware = require("./middlewares/authentication");
const notFoundMiddleware = require("./middlewares/not-found");
const errorHandlerMiddleware = require("./middlewares/error-handler");

const app = express();
app.use(express.json());
app.set("trust proxy", 1);

app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    limit: 100,
  })
);
app.use(helmet());
app.use(cors());
app.use(xss());


// routes
app.get("/", (req, res) => {
  res.send("<h1>MonoCare api</h1>");
});
app.use("/auth", authRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT ? process.env.PORT : 3000;

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();