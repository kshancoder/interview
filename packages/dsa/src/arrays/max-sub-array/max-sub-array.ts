export function maxSubArray(nums: number[]): number {
  let result = nums[0];
  let runningSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let currentValue = nums[i];
    runningSum = Math.max(currentValue, currentValue + runningSum);
    result = Math.max(result, runningSum);
  }

  return result;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
