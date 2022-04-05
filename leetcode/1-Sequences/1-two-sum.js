//leetcode problem: https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    // nums -> an array
    // target -> number we want
    // what do we want to return: from the nums array, the index of the two numbers that give us target
    
    let new_array = []; // initializing the array that will hold our indexes
    
    for (let i = 0; i < nums.length; i++){ // i represents out first number
        for (let j = i+1; j < nums.length; j++){  // j represents our second number, i+1 means that it's the number after our first number
            if(nums[i] + nums[j] == target){ // if in the nums array the number at index i and the number at index j = target number
                new_array.push(i);
                new_array.push(j);
                
                // we are pushing both indexes i and j to our new_array we initialized above
            }
        }
    }
    
    return new_array; // returning new_array which should hold our i and j indexes we pushed above
    
    
    
};
