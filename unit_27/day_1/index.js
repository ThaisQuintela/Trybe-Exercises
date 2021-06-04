const express = require('express');
const app = express();
const port = 3000;

const Author = require('./models/Author');
const Books = require('./models/Books');

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/books', async (req, res) => {
  const { author_id } = req.query;

  const books = author_id ? await Books.getByAuthorId(author_id) : await Books.getAll();

  res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;

  const book = await Books.getById(id);
  
  if (!book) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(book);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))