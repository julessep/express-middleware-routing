'use strict';

var path = require('path');
const { Router } = require('express');
const router = Router();

const showEggs = (req, res, next) => {
  res.sendFile(path.join(__dirname, `../public`, `/eggs.html`))
};

router.get('/see-our-eggs', showEggs);

module.exports = router;