const path = require('path');
const router = require('express').Router();

// GET ROUTE to open the index page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../index.html'));
  });
  
// GET ROUTE to connect notes page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../notes.html'));
  });

  module.exports = router;