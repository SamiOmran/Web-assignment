
const express = require('express');
const router = express.Router();
const Event = require('./../models/calendarSchema');

router.get('/new', function (req, res) {
  res.render('events/new')
})

module.exports = router;