const path = require('path');
const router = require('express').Router();

// GET ROUTE to open the index page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });
  
// GET ROUTE to connect notes page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

// GET ROUTE to connect to API
router.get('/api/notes', (req, res) => {
  res.json(notes);
});

  module.exports = router;