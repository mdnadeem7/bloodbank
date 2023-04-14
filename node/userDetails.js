const mongoose = require("mongoose");

const UserDetailsScehma = new mongoose.Schema(
  {
    id:Number,
    names: String,
    phno: String,
    age:String,
    pincode:String,
    btype:String
  },
  {
    collection: "DonerInfo",
  }
);

mongoose.model("DonerInfo", UserDetailsScehma);