// NOT GOOD. LOOk AT SOLVED!


// TODO: Import the Validate class.
const Validate = require('../validate.js')

// TODO: Describe a testing suite for checking the functionality of the Validate class.

// console.log(validate.isPassword())

// TODO: Write a test that asserts that isPassword() returns false when passed an empty string.

describe('validate', () => {
  describe('validate.isPassword()', () => {
    it('should return false when passed an empty string', () => {
      const total = false;
      const validate = new validate();
      expect(validate.isPassword("")).toEqual(total);
    });
  });
});
