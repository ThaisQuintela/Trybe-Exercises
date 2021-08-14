const connection = require('./connection');

const getAll = async () => connection()
  .then((db) => db.collection('messages').find().toArray())
  .then((items) => items.map(({ nome, depoimento }) => ({ nome, depoimento })));

const create = async (nome, depoimento) => connection()
  .then((db) => db.collection('messages').insertOne({ nome, depoimento }))
  .then(() => ({ nome, depoimento }));

module.exports = {
  getAll,
  create,
};
