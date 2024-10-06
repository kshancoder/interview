export function twoSum(nums: number[], target: number): number[] {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    let req = target - curr;

    if (obj[req] !== undefined) {
      return [obj[req], i];
    }

    obj[curr] = i;
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
