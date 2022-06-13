const mongoose = require("mongoose");

const scpSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  item: String,
  name: String,
  objectclass: String,
  image: String,
  description: String,
  containment: String,
});

module.exports = mongoose.model("SCP", scpSchema);
