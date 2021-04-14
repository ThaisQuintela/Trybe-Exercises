const exercises = require('./scripts');

describe('Exercise 1', () => {
  it('should return the number 10, test the calls', () => {
    exercises.randomNumber = jest.fn()
      .mockReturnValue(10);
    
    exercises.randomNumber();
    expect(exercises.randomNumber).toHaveBeenCalled;
    expect(exercises.randomNumber()).toBe(10);
    exercises.randomNumber();
    expect(exercises.randomNumber).toHaveBeenCalledTimes(3);
  });
})

describe('Exercise 2', () => {
  it('should return the division of two numbers in the randomNumber function only once', () => {
    exercises.randomNumber = jest.fn()
      .mockImplementationOnce((a, b) => a / b);

    expect(exercises.randomNumber(15, 5)).toBe(3);
    expect(exercises.randomNumber).toHaveBeenCalled;
    expect(exercises.randomNumber()).not.toBe(3);
  });
})

describe('Exercise 33', () => {
  it('should return the multiplication of three numbers in the randomNumber function', () => {
    exercises.randomNumber.mockReset();
    const randomCalc = jest.spyOn(exercises, 'randomNumber');

    randomCalc.mockImplementation((a, b, c) => a * b * c);

    expect(randomCalc(1, 2, 3)).toBe(6);
    expect(randomCalc).toHaveBeenCalled;
    expect(randomCalc(2, 4, 6)).toBe(48);
    expect(randomCalc(3, 5, 7)).toBe(105);
    expect(randomCalc).toHaveBeenCalledTimes(3);
  });

  it('should be reseted and receive a new implementation that returns the double of the imput parameter', () => {
    exercises.randomNumber.mockReset();
    const randomCalc = jest.spyOn(exercises, 'randomNumber');

    randomCalc.mockImplementation((number) => number * 2);

    expect(randomCalc(1)).toBe(2);
    expect(randomCalc).toHaveBeenCalled;
    expect(randomCalc(3)).toBe(6);
    expect(randomCalc(11)).toBe(22);
    expect(randomCalc).toHaveBeenCalledTimes(3);
  })
})