export function maxProductSubArray(nums: number[]): number {
  let result = nums[0];
  let current = 1;

  // First pass: Left to right
  for (let i = 0; i < nums.length; i++) {
    current *= nums[i];
    result = Math.max(result, current);

    if (current === 0) {
      current = 1;
    }
  }

  current = 1;

  // Second pass: Right to left
  for (let i = nums.length - 1; i >= 0; i--) {
    current *= nums[i];
    result = Math.max(result, current);

    if (current === 0) {
      current = 1;
    }
  }

  return result;
}

let result = maxProductSubArray([2, -5, -2, -4, 3]);
console.log(result);

result = maxProductSubArray([0]);
console.log(result);
