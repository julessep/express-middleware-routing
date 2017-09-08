'use strict';

var path = require('path');
const { Router } = require('express');
const router = Router();

const showChickens = (req, res, next) => {
  res.sendFile(path.join(__dirname, `../public`, `/chickens.html`))
  };

router.get('/see-our-chickens', showChickens) 

module.exports = router;