//leetcode: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/


/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  
  // Math.min with spread operator for the nums array to determine the minimum number in the array
    
    return Math.min(...nums);
    
};

