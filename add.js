function addNumbers(a, b) {
  return a + b;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = addNumbers;
}
