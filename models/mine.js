const mongoose = require("mongoose");

const MineSchema = new mongoose.Schema({
  title: { type: String, require: true },
  img: { type: String, require: true },
});

module.exports = mongoose.model("mine", MineSchema);
