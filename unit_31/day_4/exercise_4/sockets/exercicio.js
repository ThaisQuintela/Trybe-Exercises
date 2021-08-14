const Depoimentos = require('../models/exercicio');

module.exports = (io) => io.on('connection', async (socket) => {

  const messageList = await Depoimentos.getAll();
  io.emit('restore', messageList);

  socket.on('message', ({ nome, depoimento }) => {
    Depoimentos.create(nome, depoimento);
    io.emit('message', `${nome}: ${depoimento}`);
  });
});
