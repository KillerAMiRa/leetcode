/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let star = 0, end = nums.length - 1
  while (star <= end) {
    const mid = Math.floor((star + end) / 2)
    const num = nums[mid]
    if (num === target) {
      return num
    } else if (num > target) {
      end = mid - 1
    } else {
      star = mid + 1
    }
  }
  return -1
}
// @lc code=end

