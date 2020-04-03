// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");

// Requiring custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

// Routes
// =============================================================
module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render("index", {});
  });
  // Each of the below routes just handles the HTML page that the user gets sent to.
  app.get("/", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
      return;
    }
    res.render("index", {});
  });

  app.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    console.log("arrived at login page");
    if (req.user) {
      res.redirect("/members");
    }
    res.render("login", {});
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function (req, res) {
    console.log("reached members page");
    res.render("members", {});
  });

  app.get("/allitems", isAuthenticated, async function (req, res) {
    console.log("reached allitems page");
    if (!req.user) {
      res.redirect("/");
      return;
    }
    var query = {};
    const zipCode = req.user.zipCode;
    query.item_zipCode = zipCode;
    const data = await db.Post.findAll({
      where: query,
      include: [db.User]
    }).map(el => el.get({ plain: true }));

    
    res.render("allitems", { dbPost: data, layout: "main" });
  });

  // cms route loads cms.html
  app.get("/seller", function (req, res) {
    res.render("seller", { title: "my other page", layout: "main" });
  });

  app.get("/signup", function (req, res) {
    res.render("signup", {});
  });
  
};