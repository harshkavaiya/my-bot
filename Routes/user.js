const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.post("/Add", async (req, res) => {
  const { body } = req;
  if (!body.teleID && !body.name)
    return res.send({ success: 0, message: "Name & teleID required" });

  let insert = await User.create({
    ...body,
  });

  if (!insert) return res.send({ success: 0, message: "Not Create User" });
  console.log(req.body, req);
  res.send({ success: 1, message: "User is Created" });
});

router.post("/Test", async (req, res) => {
  const { body } = req;

  res.send({ ...body });
});

router.get("/getUser/:telegramId", async (req, res) => {
  const { telegramId } = req.params;

  try {
    // Fetch the user from the database by Telegram ID
    const user = await User.findOne({ teleID: telegramId });

    if (user) {
      res.json({ success: true, data: user });
    } else {
      console.error(error);
      res.json({ success: false, message: "User not found" });
    }
  } catch (error) {
    res.json({ success: false, message: "Database error" });
  }
});

router.post("/UpdateData", async (req, res) => {
  const { id } = req.body;
  try {
    // Fetch the user from the database by Telegram ID
    const update = await User.findOneAndUpdate(
      { teleID: id },
      {
        ...req.body,
      }
    );

    if (update) {
      res.json({ success: true, data: update });
    } else {
      res.json({ success: false, message: "User not found & not update" });
    }
  } catch (error) {
    return res.json({ success: false, message: "Database error" });
  }
});
module.exports = router;
