const mongoose = require("mongoose");

const TeleUserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // Telegram username
    teleID: { type: String, require: true }, // Telegram User ID
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("TeleUser", TeleUserSchema);
