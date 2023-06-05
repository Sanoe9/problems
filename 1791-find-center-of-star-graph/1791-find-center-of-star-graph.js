/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    const [[x, y], [z, w]] = edges;
    if (x === z) {
        return z;
    }
    if (x === w) {
        return x;
    }
    if (y === z) {
        return z;
    }
    if (y === w) {
        return w;
    }
};