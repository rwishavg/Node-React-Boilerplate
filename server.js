const dotenv = require("dotenv");
dotenv.config({
  path: "./utils/config.env",
});
const apiRoutes = require("./Routes/api");
const path = require("path");
const mongoose = require("mongoose")
const express = require("express");
const cors = require("cors");

const app = express();
const url = process.env.MONGO 

app.use(cors());
app.use(express.json());

mongoose.connect(url).then(()=>console.log("Connected to DB"))

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.use('/api', apiRoutes)
}

app.listen(process.env.PORT || 5000, () => {
  console.log(process.env.PORT)
  console.log(`Server running at port ${process.env.PORT}`);
});