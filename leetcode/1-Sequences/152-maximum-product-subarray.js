// leetcode: https://leetcode.com/problems/maximum-product-subarray/
// help: https://dev.to/cod3pineapple/leetcode-152-maximum-product-subarray-javascript-solution-25n4


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    
    let currentMax = nums[0];
    
    let currentMin = nums[0];
    
    /* why do we need currentMin: we need this value in case we come across 2 negative numbers 
        whose product could potentially give us the max product of an array
    */
    
    let finalMax = nums[0];
    
    /* we are setting our max min and final to our first value in our array so there is a value present, as such
        we are starting our for loop at 1 vs 0
    */
    
    for(let i = 1; i < nums.length; i++){
        
        let temp = currentMax;
        
        /*
        first round: 2
        
        second round: 6
        
        third round: -2
        
        */
        
        /* why do we need temp: in case the currentMax we change to below is a negative value */
        
        currentMax = Math.max(currentMax * nums[i], currentMin * nums[i], nums[i]);
        console.log(currentMax)
        
        /*
        
        for example: 
        
        array = [2,3,-2,4]
        
        1st round:
        
        currentMax = 2
        currentMin = 2
        nums[i] = 3
        
        2 * 3, 2 * 3, 3 -> 6, 6, 3
        
        currentMax = 6
        
        2nd round:
        
        currentMax = 6
        currentMin = 3
        nums[i] = -2
        
        6 * -2, 3 * -2, -2 -> -12, -6, -2
        
        currentMax = -2
        
        3rd round:
        
        currentMax = -2
        currentMin = -12
        nums[i] = 4
        
        -2 * 4, -12 * 4, 4 -> -8, -48, 4
        
        currentMax = 4
        
        
        
        
        */
        
        currentMin = Math.min(temp * nums[i], currentMin * nums[i], nums[i]);
        
        /*
        
        for example: 
        
        array = [2,3,-2,4]
        
        1st round:
        
        temp = 2
        currentMin = 2
        nums[i] = 3
        
        2 * 3, 2 * 3, 3 -> 6, 6, 3
        
        currentMin = 3
        
        2nd round:
        
        temp = 6
        currentMin = 3
        nums[i] = -2
        
        6 * -2, 3 * -2, -2 -> -12, -6, -2
        
        currentMin = -12
        
        3rd round:
        
        temp = -2
        currentMin = -12
        nums[i] = 4
        
        -2 * 4, -12 * 4, 4 -> -8, -48, 4
        
        currentMin = -48
        
        
        */
        
        
        finalMax = Math.max(currentMax, finalMax);
        
        /*
        
        for example: 
        
        array = [2,3,-2,4]
        
        1st round:
        
        currentMax = 6
        
        finalMax = 2
        
        new finalMax = 6
        
        
        2nd round:
        
        currentMax = -2
        
        finalMax = 6
        
        new finalMax = 6
        
        3rd round:
        
        currentMax = 4
        
        finalMax = 6
        
        new finalMax = 6
        
        
        
        */
        
    }
    
    return finalMax;
    
};
