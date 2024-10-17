const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    teleID: { type: Number, require: true, unique: true },
    name: { type: String, require: true },
    coin: { type: Number, require: false, default: 0 },
    tap: { type: Number, default: 1 },
    PPH: { type: Number, default: 0 },
    level: { type: Number, default: 1 },
    img: { type: String },
    Cards: { type: Object },
    redeem: { type: Array, default: [] },
    status: { type: Boolean },
    ban: { type: Object },
    friends: [
      {
        teleID: { type: Number, required: true },
        name: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
