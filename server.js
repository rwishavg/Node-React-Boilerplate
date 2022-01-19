const dotenv = require("dotenv");
dotenv.config({
  path: "./utils/config.env",
});

const path = require("path");

const express = require("express");
const cors = require("cors");
const app = express();

const mongoose = require("mongoose")
const schema = require('./Models/schema')
const url = process.env.MONGO 

app.use(cors());
app.use(express.json());

mongoose.connect(url).then(()=>console.log("Connected to DB"))

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  // app.get("*", (req, res) => {
  //   res.send("asdasd")
  // });
      app.post('/api/add-new-post', async (req,res)=>{
          const myName = req.body.data;
          try{
              const newData = new schema(
                  {
                      Name: myName
                  }
              )
              const saveData = await newData.save()
              console.log(myName)
          }catch(err){
              res.json(err);
          }
      })
  app.get('/api/data', function(req, res) {
    // console.log('body is ',req.body);
    res.send({"name":"John", "age":30, "car":null});
  });
}

app.listen(process.env.PORT || 5000, () => {
  console.log(process.env.PORT)
  console.log(`Server running at port ${process.env.PORT}`);
});