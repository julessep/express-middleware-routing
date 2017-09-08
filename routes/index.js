'use strict';
var path = require('path');

const { Router } = require('express');
const router = Router();

router.use(require('./chickens'));
router.use(require('./eggs'));

router.get('/', function(req, res) {
  res.render('html/index.html');
  next()
});

module.exports = router;