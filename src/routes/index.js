const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    title: 'BOOKS LIBRARY',
  });
});

module.exports = router;
