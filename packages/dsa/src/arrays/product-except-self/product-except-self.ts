export function productExceptSelf(nums: number[]): number[] {
  let result = [];
  let current = 1;

  for (let i = 0; i < nums.length; i++) {
    result.push(current);
    current *= nums[i];
  }

  current = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = current * result[i];
    current *= nums[i];
  }

  return result;
}

let result = productExceptSelf([1, 2, 3, 4]);
console.log(result);
