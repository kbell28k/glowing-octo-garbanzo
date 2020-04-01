// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Requiring custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

// Routes
// =============================================================
module.exports = function (app) {
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

  // cms route loads cms.html
  app.get("/seller", function (req, res) {
    res.render("seller", {});
  });

  app.get("/signup", function (req, res) {
    res.render("signup", {});
  });

  // Image Uploader page
  app.get("/img-upload", (req, res) => {
    res.sendFile(path.join(__dirname, "img_upload.html"));
  });
};
