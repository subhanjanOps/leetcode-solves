/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 *
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 *
 * Example 2:
 *
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 *
 * Example 3:
 *
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 *
 * Constraints:
 *
 * 2 <= nums.length <= 104
 * -109 <= nums[i] <= 109
 * -109 <= target <= 109
 * Only one valid answer exists.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums= [1, 2, 3, 4, 5], target = 7) {
    try {
        console.log("========Two sums solve========");
        let ans = [];
        for (let i = 0; i < nums.length; i++) {
            for (let j = i+1; j< nums.length; j++) {
                if (nums[i]+nums[j] === target) {
                    console.log("conditions", nums[i], "+", nums[j]);
                    console.log(i, j)
                    ans.push(i, j);
                    break;
                }
            }
            if (ans.length > 0) {
                break;
            }
        }
        console.log(ans);
        console.log("==============================");
    } catch (ex) {
        throw ex;
    }
};

module.exports = {
    twoSum,
}