const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());


const mongoUrl =
  "mongodb+srv://nadeem:yiWyOjVqhRLXbbAd@bloodbankdb.5qvxx9c.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

require("./userDetails");

const User = mongoose.model("DonerInfo");
app.post("/register", async (req, res) => {
  const {names, phno,age,pincode,btype } = req.body;
  try {
    await User.create({
     phno,names,phno,age,pincode,btype
     });
     res.send({status:"OKKKKKKKKKKKKKKK"});
} catch (error) {
    res.send({status:"NOT OKKKKKKKKKKKKKKK"});
}
});
app.get("/",async(req,res)=>{
  User.find().then(founddata=> res.json(founddata))
});
app.listen(5000, () => {
    console.log("Server Started");
  });
