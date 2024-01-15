const express = require("express");
const router = express.Router();
const User = require("../models/user");
const CryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");
const handleErrors = require("../utils/validationError");

const createToken = (id, isAdmin) => {
  return jwt.sign({ id, isAdmin }, process.env.JWT_SEC, {
    expiresIn: "3d",
  });
};

//* REGISTER
router.post("/register", async (req, res) => {
  try {
    const { password, ...otherInfo } = req.body;
    const hashedPassword = CryptoJs.AES.encrypt(
      password,
      process.env.SEC_KEY
    ).toString();
    const newUser = new User({
      ...otherInfo,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    const { password: pass, ...others } = savedUser._doc;
    const accessToken = createToken(savedUser._id, savedUser.isAdmin);
    res.status(201).json({ accessToken, ...others });
  } catch (err) {
    let error = { message: "An unknown error occured" };
    let statusCode = 500;

    if (Object.values(handleErrors(err)).length > 0) {
      error = handleErrors(err);
      statusCode = 400;
    }

    res.status(statusCode).json(error);
  }
});

//* LOGIN
router.post("/login", async (req, res) => {
  try {
    const { username } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: "Wrong credentials" });
    }

    const hashedPassword = user.password;
    const password = CryptoJs.AES.decrypt(
      hashedPassword,
      process.env.SEC_KEY
    ).toString(CryptoJs.enc.Utf8);

    if (req.body.password !== password) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    const { password: pass, ...others } = user._doc;
    const accessToken = createToken(user._id, user.isAdmin);
    res.status(200).json({ accessToken, ...others });
  } catch (err) {
    res.status(500).json({ message: "An unknown error ocurred." });
  }
});

module.exports = router;
