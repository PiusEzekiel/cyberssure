const bodyparser = require('body-parser')
const express = require("express");
const app = express();
const userModel = require("./models");
const { connectDB } = require("./db");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const cors = require('cors')

connectDB();

app.use(cors({
  origin:"*", credentials: true
}))

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  console.log(req.body)

  if (!email || !password) {
    return res.status(400).json({
      message: "All fields are required!",
    });
  }
  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(404).json({
      message: "User not found!",
    });
  }

  if (user.password !== password) {
    return res.status(401).json({
      message: "Invalid credentials!",
    });
  }
  const token = jwt.sign(
    {
      email: user.email,
      name: user.name,
    },
    process.env.SECRET_KEY,
  );

  res.status(200).json({
    message: "Login successful!",
    user,
    token,
  });
  return;
});

app.post("/register", async (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password || !name) {
    return res.status(400).json({
      message: "All fields are required!",
    });
  }
  const user = await userModel.create({
    email,
    password,
    name,
  });

  const token = jwt.sign(
    {
      email: user.email,
      name: user.name,
    },
    process.env.SECRET_KEY,
  );

  res.status(201).json({
    message: "User created successfully!",
    user,
    token,
  });
  return;
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
