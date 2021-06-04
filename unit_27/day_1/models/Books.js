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
};

const getById = async (id) => {
  const [bookById] = await connection.execute(
    'SELECT * FROM model_example.books WHERE id=?;',
    [id],
  );
  if (bookById.length === 0) return null;

  return bookById;
};

module.exports = {
  getAll,
  getByAuthorId,
  getById,
};
