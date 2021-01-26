const sum = require('./Exercise1');

describe('Exercise 1', () => {
  it('Test if sum of 4 and 5 is equal to 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('Test if sum of 0 and 0 is equal to 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('Test if it returns error if a string is used as a parameter', () => {
    expect(() => {sum(4, '5')}).toThrow();
  });

  it('Test if the error message is "parameters must be numbers"', () => {
    expect(() => {sum(4, '5')}).toThrowError(new Error('parameters must be numbers'));
  });
})

const myRemove = require('./Exercise2');

describe('Exercise 2', () => {
  it('Test if myRemove([1, 2, 3, 4], 3) returns the expected array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('Test if myRemove([1, 2, 3, 4], 3) does not returns [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('Test if the parameter array does not suffered changes', () => {
    const anotherArr = [1, 3, 5, 7];
    myRemove([1, 3, 5, 7]);
    expect(anotherArr).toEqual([1, 3, 5, 7]);
  });

  it('Test if myRemove([1, 2, 3, 4], 5) returns the expected array', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
})

const myRemoveWithoutCopy = require('./Exercise3');

describe('Exercise 3', () => {
  it('Test if myRemoveWithoutCopy([1, 2, 3, 4], 3) returns the expected array', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('Test if myRemoveWithoutCopy([1, 2, 3, 4], 3) does not return [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 2)).not.toEqual([1, 2, 3, 4]);
  });

  it('Call the function and verify if the parameter array has suffered changes', () => {
    const anotherArr = [1, 3, 5, 7];
    myRemoveWithoutCopy(anotherArr, 5);
    expect(anotherArr).not.toEqual([1, 3, 5, 7]);
  });

  it('Test if myRemove([1, 2, 3, 4], 5) returns the expected array', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
})

const myFizzBuzz = require('./Exercise4');

describe('Exercise 4', () => {
  it('Call the function with a number multiple of 3 and 5 and check if the return is as expected', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('Call the function with a number multiple of 3 and check if the return is as expected', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  it('Call the function with a number multiple of 5 and check if the return is as expected', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });

  it('Call the function with a non-number parameter and check if the return is as expected', () => {
    expect(myFizzBuzz('hi')).toBe(false);
  })
})

const { encode, decode } = require('./Exercise5');

describe('Exercise 5', () => {
  it('Test if encode is a function', () => {
    expect(encode).toBeDefined;
    expect(typeof encode).toBe('function');
  });

  it('Test if decode is a function', () => {
    expect(decode).toBeDefined;
    expect(typeof decode).toBe('function');
  });

  it('Test if the vowels return the right numbers', () => {
    expect(encode('ask')).toBe('1sk');
    expect(encode('helice')).toBe('h2l3c2');
    expect(encode('vulcan')).toBe('v5lc1n');
    expect(encode('tomorrow')).toBe('t4m4rr4w');
  });

  it('Test if the numbers return the right vowels', () => {
    expect(decode('1sk')).toBe('ask');
    expect(decode('h2l3c2')).toBe('helice');
    expect(decode('v5lc1n')).toBe('vulcan');
    expect(decode('t4m4rr4w')).toBe('tomorrow');
  });

  it('Test if the returned string has the same length of the parameter', () => {
    expect(encode('trybe').length).toBe(5);
  });

  it('Test if the returned string has the same length of the parameter', () => {
    expect(decode('tryb2').length).toBe(5);
  });
})
