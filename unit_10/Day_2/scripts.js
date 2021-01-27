const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      };

      return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};

const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const findAnimal = Animals.find((animal) => animal.name === name);
      if (findAnimal) {
        return resolve(findAnimal);
      };
      const error = 'Nenhum animal com esse nome!';
      return reject(error);
    }, 100);
  })
);

const getAnimal = (name) => {
  return findAnimalByName(name).then(animal => animal);
};

module.exports = { uppercase, findUserById, getUserName, getRepos, getAnimal };
