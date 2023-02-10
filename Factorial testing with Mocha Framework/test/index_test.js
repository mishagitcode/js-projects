var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('5! equals 120', () => {
      //setup
      let expected = 120;

      //exersice
      let actual = Calculate.factorial(5);

      //verify
      assert.equal(actual, expected);
    });

    it('3! equals 6', () => {
      //setup
      let expected = 6;

      //exersice
      let actual = Calculate.factorial(3);

      //verify
      assert.equal(actual, expected);
    });

    it('returns 1 when you pass in 0.', () => {
      //setup
      let expected = 1;

      //exersice
      let actual = Calculate.factorial(0);

      //verify
      assert.equal(actual, expected);
    });
  });
});