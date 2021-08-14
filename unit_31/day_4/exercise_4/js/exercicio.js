const socket = window.io();

window.onload = () => {
  socket.emit('newUser');
};

const form = document.querySelector('#depoimentoForm');
const inputName = document.querySelector('#name');
const inputMessage = document.querySelector('#message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const depoimento = inputMessage.value;
  const nome = inputName.value;

  socket.emit('message', { nome, depoimento });
  inputName.value = '';
  inputMessage.value = '';
  return false;
});

const addDepoimento = (depoimento) => {
  const depoimentosList = document.querySelector('#depoimentos');
  const li = document.createElement('li');
  li.innerText = depoimento;
  depoimentosList.appendChild(li);
  return null;
};

socket.on('message', (message) => addDepoimento(message));

socket.on('restore', (messageList) => {
  if(!messageList) return 0;

  const depoimentosList = document.querySelector('#depoimentos');
  depoimentosList.innerHTML = '';
  messageList.map(({ nome, depoimento }) => addDepoimento(`${nome}: ${depoimento}`));
});
