/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let buy = prices[0];
    let sell = prices[1];
    
    for (let i = 0; i < prices.length; i++) {
        if (buy > sell) {
            buy = prices[i + 1];
            sell = prices[i + 2];
        }
        if (buy <= sell) {
            profit = Math.max(profit, sell - buy);
            sell = prices[i + 2];
        }
    }
    
    return profit;
};