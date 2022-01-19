const dotenv = require("dotenv");
dotenv.config({
  path: "./utils/config.env",
});

const path = require("path");

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  // app.get("*", (req, res) => {
  //   res.send("asdasd")
  // });
  app.get('/api/data', function(req, res) {
    // console.log('body is ',req.body);
    res.send({"name":"John", "age":30, "car":null});
  });
}




app.listen(process.env.PORT || 5000, () => {
  console.log(process.env.PORT)
  console.log(`Server running at port ${process.env.PORT}`);
});