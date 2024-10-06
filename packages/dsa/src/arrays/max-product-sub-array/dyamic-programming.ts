// https://leetcode.com/problems/maximum-product-subarray/description/
export function maxProductSubArray(nums: number[]): number {
  let result = nums[0];

  let positiveProduct = nums[0];
  let negativeProduct = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let currentValue = nums[i];

    let currentPositiveProduct = Math.max(
      currentValue,
      currentValue * positiveProduct,
      currentValue * negativeProduct,
    );

    let currentNegativeProduct = Math.min(
      currentValue,
      currentValue * positiveProduct,
      currentValue * negativeProduct,
    );

    positiveProduct = currentPositiveProduct;
    negativeProduct = currentNegativeProduct;

    result = Math.max(result, positiveProduct);
  }

  return result;
}

let result = maxProductSubArray([-3, 2, -2, 2, -2, 5]);
console.log(result);

result = maxProductSubArray([4, 2, 3, 0, 4, 4]);
console.log(result);
