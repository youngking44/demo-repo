if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const connectDB = require("./db/connect");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");

const PORT = process.env.PORT || 9000;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/checkout", stripeRoute);
app.use("/api/orders", orderRoute);

app.get("/healthcheck", (req, res) => {
  res.json("Server up and running...");
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, () => console.log("Server running on port:", PORT));
  } catch (err) {
    console.log("Sorry can't connect to database", err);
    process.exit(1);
  }
};

start();
