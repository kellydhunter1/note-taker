const express = require('express');
const notes  = require('./db/db.json')
const app = express();

const htmlRoutes = require('./public/routes/htmlroutes');
// const apiRoutes = require('./public/routes/apiroutes');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', htmlRoutes);
app.use(express.static('public'));



function findById(id, notesArray) {
  const result = notesArray.filter(note => note.id === id)[0];
  return(result);
};

app.get('/api/notes', (req, res) => {
  res.json(notes);
});

app.get('/api/notes/:id', (req, res) => {
  const result = findById(req.params.id, notes);
if (result) {
  res.json(result);
}
else{
  res.sendStatus(404);
}
});

// server connection
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});