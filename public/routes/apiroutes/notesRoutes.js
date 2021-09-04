const router = require('express').Router();
const { notes } = require('../../db/db');

router.get('/notes', (req, res) => {
    res.json(notes);
    console.log(notes);
});

module.exports = router;