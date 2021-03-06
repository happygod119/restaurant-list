const express = require("express");

const router = express.Router();

const home = require("./modules/home");
const restaurants = require("./modules/restaurants");
const users = require("./modules/users"); 
const { authenticator } = require("../middleware/auth");//* 掛載 middleware
const auth = require("./modules/auth");   

router.use("/users", users);
router.use("/auth", auth);
router.use("/restaurants", authenticator, restaurants);  //* 加入驗證程序
router.use("/", authenticator, home);  //* 加入驗證程序

module.exports = router;
