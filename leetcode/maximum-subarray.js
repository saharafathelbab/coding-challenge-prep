/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

    let sum = 0; 
    let my_array = [];
    
    for(let i=0; i< nums.length; i++){
        
        sum = sum + nums[i]; // we are adding whatever sum is currently plus the current number at index nums[i] as we loop through
        
        if(sum < 0){ // if sum is less than 0 (i.e. if our first number in our array is -1. Then the above would be sum = 0 + (-1) which would would mean sum = -1)
          
            sum = 0; // we set the sum to 0; this means we are disregarding the negative number as being our sum, and re-setting it to 0 so that we can 'start over' at whichever next index we will be going to next
          
            my_array.push(nums[i]); 
            
            // Why are we pushing nums[i] into our array?
            // For example, say we have an array that is just [-1]
            // the flow would go:
            // sum = 0 + (-1) = -1
            // If sum is less than 0 then sum is re-set to 0.
            // if our only variable in our array is -1, then that means our array is empty when it runs Math.max(...my_array) below to find the max number in the array, which means it returns -Infinity when running Math.max on an empty array.
            // by pushing the nums[i] that we are currently on, we are ensuring that there's a value inserted into our array in the event that all numbers in the array are negative numbers.
          
        }else{
          
            my_array.push(sum);
            
            // if the sum is not a negative number, then that sum is then pushed to our array. And sum remains the sum of the numbers up until this point in our for loop.
        }
    }
    
    return Math.max(...my_array); // We are finding the max number in our array and returning it
    //the three dots is the spread operator -> applied to the array, this allows max to look at each element in our array to see which is the maximum value
    
};
