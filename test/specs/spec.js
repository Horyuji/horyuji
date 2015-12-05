describe('A suite', () => {
  it('contains spec with an expectation', () => {
    expect(true).toBe(true);
  });
});

describe('Test square', () => {
  it('Should be calculated square 1-5', () => {
    expect(square()).toEqual([1, 4, 9, 16, 25]);
  });
});
