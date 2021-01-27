const { uppercase, getUserName, getRepos, getAnimal } = require('./scripts');

describe('Exercise 1', () => {
  it('should return a parameter string in upper case', done => {
    uppercase('trybe', (str) => {
      expect(str).toBe('TRYBE');
      done();
    });
  });
})

describe('Exercise 2', () => {
  it('should be the user id showed by the resolve', () => {
    return getUserName(4).then(userID => {
      expect(userID).toBe('Mark');
    });
  });

  it('should be the answer when the user is not found', () => {
    return getUserName(1).catch(error => {
      expect(error).toEqual({ error: 'User with 1 not found.' });
    });
  });
})

describe('Exercise 3', () => {
  it('should be the user id showed by the resolve', async () => {
    const userID = await getUserName(4);
    expect(userID).toBe('Mark');
  });

  it('should be the answer when the user is not found', async () => {
    try {
      await getUserName(1);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 1 not found.' });
    };
  });
})

describe('Exercise 4', () => {
  it('should show the repositories asked', async () => {
    const repos = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect.assertions(2);
    expect(repos).toContain('sd-01-week4-5-project-todo-list');
    expect(repos).toContain('sd-01-week4-5-project-meme-generator');
  });
})

describe('Exercício 5: Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});