/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // loop over prices
    // if i was to buy the stock on day 1, how much profit can i make if i sell it on day 2, day 3 ... day prices.length ?
    // so when i=0, compare prices[0] to prices[1], prices[2]...
    // have a variable profit prices[i] - prices[0] and see which one will be higher
    
    // let bestProfit = 0;
    // for (let i = 0; i < prices.length - 1; i++) {
    //     for (j = i + 1; j < prices.length; j++) {
    //         let priceToday = prices[i];
    //         let priceLater = prices[j];
    //         let possibleBestProfit = priceLater - priceToday;
    //         bestProfit = Math.max(bestProfit, possibleBestProfit);
    //     }
    // }
    // return bestProfit;
    
    let maxProfit = 0;
    let min  = prices[0];
    for (let i = 1; i < prices.length; i++) {
        min = Math.min(prices[i], min);
        maxProfit = Math.max(maxProfit, prices[i] - min);
    }
    return maxProfit;
};