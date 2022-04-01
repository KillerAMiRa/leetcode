/*
 * @lc app=leetcode.cn id=525 lang=javascript
 *
 * [525] 连续数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
  let maxLength = 0, count = 0
  const obj = new Map()

  obj.set(count, -1)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++
    } else {
      count--
    }

    if (obj.has(count)) {
      const prevIndex = obj.get(count)
      maxLength = Math.max(maxLength, i - prevIndex)
    } else {
      obj.set(count, i)
    }
  }
  console.log('obj', obj)

  return maxLength
}

console.log(findMaxLength([0, 1, 0, 1, 0]))
// @lc code=end

