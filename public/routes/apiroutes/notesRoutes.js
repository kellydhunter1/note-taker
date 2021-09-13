const app = require('express')
const { notes } = require('../../db/db');

app.get('/notes', (req, res) => {
    notes = filterByQuery(req.query, notes);
    res.json(notes);
    console.log(notes);
});

module.exports = router;