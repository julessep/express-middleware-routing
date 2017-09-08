'use strict';
var path = require('path');

const { Router } = require('express');
const router = Router();

// router.use(require('./see-our-chickens'));
// router.use(require('./see-our-eggs'));

router.get('/', function(req, res) {
  res.render('html/index.html');
  next()
});

router.get('/see-our-chickens', function(req, res, next) {
  console.log(path.join(__dirname, `../public`, `/chickens.html`))
  res.sendFile(path.join(__dirname, `../public`, `/chickens.html`))
  
});

router.get('/see-our-eggs', function(req, res, next) {
  res.sendFile(path.join(__dirname, `../public`, `/eggs.html`))
});


module.exports = router;