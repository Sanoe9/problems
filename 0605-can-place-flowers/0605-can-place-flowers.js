/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
let possibleFlowers = 0;
    let prev;
    let next = flowerbed[1];
    let curr = flowerbed[0];
    
    for (let i = 0; i < flowerbed.length; i++) {
        if ((prev === undefined || prev === 0) && curr === 0 && next === 0 || (prev === undefined && curr === 0 && next === undefined)) {
            console.log(i, 'first if');
            flowerbed[i] = 1;
            possibleFlowers++;
            prev = flowerbed[i];
            curr = flowerbed[i + 1];
            next = flowerbed[i + 2];
        } else if (prev === 0 && curr === 0 && next === undefined) {
            console.log(i,'second if');
            flowerbed[i] = 1;
            possibleFlowers++;
            return possibleFlowers >= n;
        } else {
            console.log(i,'third if');
            prev = flowerbed[i];
            curr = flowerbed[i + 1];
            next = flowerbed[i + 2];
        }
    }
    
    return possibleFlowers >= n;
};