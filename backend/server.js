require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require('path')
const port = process.env.PORT || 5000
const cookiesP = require('cookie-parser');
const cors = require("cors");
const mongooseConnection = require("./connections/connection");
const router = require("./routes/routes");
 mongooseConnection(process.env.MONGOURL || "mongodb://localhost:27017/localstore");

 app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 app.use(bodyParser.json())
 app.use(bodyParser.urlencoded({ extended: true }))
 app.use(cookiesP())

// Debug middleware


app.use(cors({
  origin: "https://lkmart.onrender.com/", //  frontend URL
  credentials: true
}));

app.use("/api", router);


app.listen(port, () =>
  console.log('> Server is up and running on port : ' + port)
)