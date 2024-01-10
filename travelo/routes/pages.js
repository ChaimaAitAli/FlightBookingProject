const express = require("express");
const router = express.Router();
const userContoller = require("../controllers/users");


router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/profile", userContoller.isLoggedIn, (req, res) => {
  if (req.user) {
    res.render("profile", { user: req.user });
  } else {
    res.redirect("/login");
  }
});
router.get("/", userContoller.isLoggedIn, (req, res) => {
  if (req.user) {
    res.render("booking", { user: req.user });
  } else {
    res.redirect("/login");
  }
});

router.get("/booking", (req, res) => {
  res.render("booking");
});

router.get("/search", (req, res) => {
  res.render("search");
});


module.exports = router;