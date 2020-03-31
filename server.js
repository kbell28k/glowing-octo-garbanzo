const express = require("express"),
  app = express(),
  passport = require("passport"),
  session = require("express-session"),
  bodyParser = require("body-parser"),
  //env = require('dotenv').load(),
  exphbs = require("express-handlebars");
cloudinary = require("cloudinary").v2;

var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.use(passport.initialize());

app.use(passport.session());

// Cloudinary Config

cloudinary.config({
  cloud_name: "dhitmyxio",
  api_key: "434933154362283",
  api_secret: "6t_Ajztu1CGhNdF4GswNfotXduw"
});

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Handlebars.registerPartial("img_upload", "{{ img_upload }}");

// Import routes and give the server access to them.
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
