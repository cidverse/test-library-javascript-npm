/**
 * A basic calculator class.
 */
class Calculator {
  /**
   * Add two numbers.
   * @param {number} a First number
   * @param {number} b Second number
   * @returns {number} Sum of a and b
   */
  add(a, b) {
    return a + b;
  }

  /**
   * Subtract two numbers.
   * @param {number} a First number
   * @param {number} b Second number
   * @returns {number} Result of a - b
   */
  subtract(a, b) {
    return a - b;
  }

  /**
   * Multiply two numbers.
   * @param {number} a First number
   * @param {number} b Second number
   * @returns {number} Product of a and b
   */
  multiply(a, b) {
    return a * b;
  }

  /**
   * Divide two numbers.
   * @param {number} a Numerator
   * @param {number} b Denominator
   * @returns {number} Result of a / b
   * @throws {Error} When division by zero occurs
   */
  divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }
}

module.exports = Calculator;
