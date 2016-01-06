describe('sample test',() => {
  describe('A suite', () => {
    it('contains spec with an expectation', () => {
      expect(true).toBe(true);
    });
  });

  describe('comment class', () => {
    it('show method to Wellcome message', () => {
      var comment = new Comment('test');
      expect(comment.show()).toBe('Wellcome test !');
    });
    it('Throw Cannot call a class as a function', () => {
      expect(()=> Comment()).toThrow(new TypeError("Cannot call a class as a function"));
    });
  });
});
