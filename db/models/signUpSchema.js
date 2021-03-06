const mongoose = require("mongoose");

const signUpTemplate = new mongoose.Schema({
  fullName: { type: String, required: true },
  userName: { type: String, required: true, unique:true },
  email: { type: String, required: true,unique:true  },
  password: { type: String, required: true },
  favoriteSchema: [{ type: mongoose.Schema.Types.ObjectId, ref: "electronics" }],
  date: { type: Date, default: Date.now },
});


module.exports = mongoose.model("signUp", signUpTemplate);