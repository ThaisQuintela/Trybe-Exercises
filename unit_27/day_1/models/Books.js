const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT * FROM model_example.books;',
  );
  return books;
};

const getByAuthorId = async (authorId) => {
  const [booksByAuthorId] = await connection.execute(
    'SELECT * FROM model_example.books WHERE author_id=?;',
    [authorId],
  );
  return booksByAuthorId;
}

module.exports = {
  getAll,
  getByAuthorId,
};
