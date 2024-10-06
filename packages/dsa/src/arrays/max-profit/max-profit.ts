// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
export function maxProfit(prices: number[]): number {
  let profit = 0;
  let buy = prices[0];

  for (let i = 1; i < prices.length; i++) {
    let currentPrice = prices[i];

    if (buy > currentPrice) {
      buy = currentPrice;
    }

    profit = Math.max(profit, currentPrice - buy);
  }

  return profit;
}

console.log(maxProfit([2, 4, 1]));
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
