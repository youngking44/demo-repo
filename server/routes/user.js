const express = require("express");
const router = express.Router();
const User = require("../models/user");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middlewares/verifyToken");

//* UPDATE USER
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    const { password, ...others } = updatedUser._doc;
    res.status(200).json(others);
  } catch (err) {
    let error = { message: "An unknown error occured." };
    if (err instanceof Error) {
      error = err.message;
    }

    if (err.code === 11000) {
      err.message.includes("username_1 dup key")
        ? (error = { message: "Username has been taken" })
        : (error = { message: "Email has been taken" });
    }
    res.status(500).json(error);
  }
});

//* DELETE USER
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("Successfully deleted!");
  } catch (err) {
    res.status(500).json(err);
  }
});

//* GET USER
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

//* GET ALL USERS
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new;

  try {
    let users = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();

    users = users.map((user) => {
      const { password, ...others } = user._doc;
      return others;
    });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

//* GET USER STATS
router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      { $project: { month: { $month: "$createdAt" } } },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]).sort({ _id: 1 });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
