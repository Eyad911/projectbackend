const mongoose = require("mongoose");

const electronicsTemplate = new mongoose.Schema({
  Name: { type: String, required: true },
  Discription: { type: String, required: true, unique:true },
  Pic: { type: String, required: true,unique:true  },
  Price: { type: String, required: true },
  Kind: { type: String, required: true },
  date: { type: Date, default: Date.now },
});


module.exports = mongoose.model("electronics", electronicsTemplate);