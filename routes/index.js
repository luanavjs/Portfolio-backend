/*var express = require('express');
var router = express.Router();

// GET home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;*/

var express = require('express');
var router = express.Router();
const Profile = require("../models/profiles");

/* GET home page. */
router.get('/', function(req, res, next) {
  const profiles = await Profiles.find();
  res.render('index', { title: 'Express', profiles });
});

module.exports = router;

