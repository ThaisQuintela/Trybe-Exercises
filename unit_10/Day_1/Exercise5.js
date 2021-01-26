function encode(message) {
  let newMessage = '';
  for (let index in message) {
    if (message[index] === 'a') {
      newMessage += '1';
    } else if (message[index] === 'e') {
      newMessage += '2';
    } else if (message[index] === 'i') {
      newMessage += '3';
    } else if (message[index] === 'o') {
      newMessage += '4';
    } else if (message[index] === 'u') {
      newMessage += '5';
    } else {
      newMessage += message[index];
    }
  }
  return newMessage;
}

function decode(message) {
  let newMessage = '';
  for (let index in message) {
    if (message[index] === '1') {
      newMessage += 'a';
    } else if (message[index] === '2') {
      newMessage += 'e';
    } else if (message[index] === '3') {
      newMessage += 'i';
    } else if (message[index] === '4') {
      newMessage += 'o';
    } else if (message[index] === '5') {
      newMessage += 'u';
    } else {
      newMessage += message[index];
    }
  }
  return newMessage;
}

const functions = { encode, decode };
module.exports = functions;