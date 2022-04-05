// leetcode: https://leetcode.com/problems/contains-duplicate/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    // nums -> an array that holds integers
    // what do we want: return the value true if any value appears at least twice
    
    while(nums.length){ // while there are still values in the nums array
        
        let value = nums.shift(); // remove the first element in the nums array, and store that value into our variable, value
        
        if(nums.indexOf(value) != -1){ 
            return true;
        }
        
           // .indexOf -> we are checking if our value that we have in our value variable is found in the array after we removed it. 
                // ie. if there is another element that is the same elment 
                // i.e a duplicate. 
            
            // If a second instance of the value is found in the array, .indexOf returns the index where it is found, if not, then it returns a -1. 
            
            // What we are doing here is if the value returned is not -1 (i.e. a duplicate found of our value variable in the existing 
            // array after we .shifted())) we are returning true because that means besides the value variable we .shift() off from the array, 
            // another instance of the value exists.
            
            // We are exiting out of the while loop because the problem says if any duplicate exists 
            // return true, so once we see the first instance of a duplicate, we return true and exit out of the while loop
    }
    
    return false; // if there is no duplicate we return false
    
    // why are there two returns?
  
        // the first return in the while loop -> that only returns true if there is a duplicate, 
                                              // in the event that there is no duplicate then that if condition in the while loop never runs
  
        // the second return outside of the while loop -> the return false at the end here is our safety net of if 
                                                       // the if condition in the while loop doesn't run. i.e. doesn't return true, 
                                                       // then that means that there is no duplicate that exists in the array which means we return false.

};
