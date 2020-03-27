var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
 

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  
   
});

router.post("/api/cats", function(req, res) {
   
});

router.put("/api/cats/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);
 
});

router.delete("/api/cats/:id", function(req, res) {
  var condition = "id = " + req.params.id;
 
});

// Export routes for server.js to use.
module.exports = router;
