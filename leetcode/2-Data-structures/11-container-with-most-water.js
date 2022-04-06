// leetcode: https://leetcode.com/problems/container-with-most-water/
// youtube video for help: https://youtu.be/FtrorVKobgw


/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
    let max = 0;
    
    let startNumber = 0;
    
    let endNumber = height.length-1;
    
    while(startNumber < endNumber){
        
        /*
        
        startNumber -> index of our frist number
        endNumber -> index of our second number
        
        using our example array:
        
        [1,8,6,2,5,4,8,3,7]
        
        at the start our startNumber = 0 (index of first number)
        at the start our endNumber = 8 (index of last number)
        
        we are then looking for the minimum number between the 2 numbers.
        
        why?
        
        we can only go as high as the lowest number in our graph in terms of height
        
        we will multiply the two numbers together so our first iteration will go like this:
        
        (endNumber - startNumber) * Math.min(height[startNumber], height[endNumber])
        
        (8         -    0       )  *  Math.min (       1           ,       8          )    
        
        (           8           )       *           (                 1                    )
        
                                        8
        
        
        */
        
        
        let temp = (endNumber - startNumber) * Math.min(height[startNumber], height[endNumber]);
        
        // max is comparing our current value of max to our temp value above to see which is greater
        // whichever is greater is the new value of max
        
        max = Math.max(max, temp);
        
        // the value for the array is limited by the smaller value, so moving the larger value may not help compared to moving the shorter one
        
        // so we have condiitons 
        // if the height[startNumber] value is larger in value we move the endNumber pointer which at it's current index value in height is less than it
        
        // if the height[endNumber] value is larger in value, we move the startNumber pointer which at it's current index value in height is less than it
        
        if(height[startNumber] > height[endNumber]) {
            
            // if the value at index StartNumber is greater than the value at index endNumber
            
            endNumber--; 
            
            // decrease the end pointer to go to the next pointer to the left of it
            
            
        } else {
            
            startNumber++;
            
            // if the value at index startNumber is less than the value at index endNumber/same as/any other case, increase it to go to the next on the right of it

        }
        
        // we are moving both endNumber and startPointer until they meet each other in the middle
        
        
    }
    
    return max;
    
};
