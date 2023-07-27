const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_SEC);

router.post("/payment", async (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        return res.status(500).json(stripeErr);
      }
      res.status(200).json(stripeRes);
    }
  );
});

module.exports = router;
