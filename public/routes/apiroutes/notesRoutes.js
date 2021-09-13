const router = require('express').Router();
const { notes } = require('../../db/db');

router.get('/notes', (req, res) => {
    notes = filterByQuery(req.query, notes);
    res.json(notes);
    console.log(notes);
});

module.exports = router;