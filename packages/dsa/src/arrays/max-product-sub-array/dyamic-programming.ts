// https://leetcode.com/problems/maximum-product-subarray/description/
export function maxProductSubArray(nums: number[]): number {
  let currentMax = nums[0];
  let currentMin = nums[0];

  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let tempMax = currentMax;

    currentMax = Math.max(nums[i], nums[i] * currentMax, nums[i] * currentMin);
    currentMin = Math.min(nums[i], nums[i] * tempMax, nums[i] * currentMin);

    result = Math.max(currentMax, result);
  }

  return result;
}

let result = maxProductSubArray([4, 2, 3, 0, 4, 4]);
console.log(result);
