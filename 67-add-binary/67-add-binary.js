/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
      const aBin = `0b${a}`;
      const bBin = `0b${b}`;
      const total = BigInt(aBin) + BigInt(bBin);
      return total.toString(2);
};