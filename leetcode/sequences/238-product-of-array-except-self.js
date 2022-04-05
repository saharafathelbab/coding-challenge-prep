// leetcode problem: https://leetcode.com/problems/product-of-array-except-self/

// helpful video: https://youtu.be/bNvIQI2wAjk

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    let prefix_output = [1];
    let pre = 1;
    let post = 1;
    let postfix_output = [1]
    let answer = [];
    
    /* 
    
    Why is prefix_output = [1]?
    
    We are setting this array + values with the value 1 in the array/for the value because before the first number in the array
    there is nothing before it. (will be explained more below)
    
    what is the point of this array: to multiply the numbers before the number we are on
    
    */
    
    for(let i = 0; i<nums.length-1; i++){
        pre = pre*nums[i];
        prefix_output.push(pre);
    }
    
    /*
    
    for example if we were givent the array: [1,2,3,4]
    
    the pre -> the numbers before the current number times the current number.
    
    Why did we start our array above with a 1, that means we now have 2 1's, why?
    
    This is because we have to account for the number before our array begins - 
    so 1 is our default value (pre) and inserted in the array first.
    
    to cycle through the loop:
    
    our pre value is: 1
    
    1 (our pre value) * 1 (our first number in our array) = 1
    
    our pre value is: 1
    
    1 (our pre value) * 2 (our second number in our array) = 2
    
    our pre value is: 2
    
    2 (our pre value) * 3 (our third number in our array) = 6
    
    the next value is not included in our array as I have length-1 in my for loop.
    
    Why do I have length-1 in my for loop?
    
    Our first value in our array is 1, as we don't have a default value for our pre value, we put a 1 in our array.
    
    When we have a 1 in our array, that means we only have 3 remaining spots in our array available to mirror
    the amount in our original array.
    
    to put the prevalue array here: [1,1,2,6]
    
    so for the array [1,2,3,4]
    
    to describe how our pre-value array [1,1,2,6] pertains to our array:
    
    first value 1 -> the default value before our 1st number in our array
    
    second value 1 -> the product of the numbers before (1) * the current number in the array (1) = 1
    
    third value 2 -> the product of the numbers before (1) * the current number in the array (2) = 2
    
    fourth value  6 -> the product of the numbers before (2) * the current number in the array (3) = 6
    
    
    */
    
    console.log(prefix_output) // per our example: [1,1,2,6]
    
    let reverse = nums.reverse(); 
    
    // why are we reversing: we need to get the product of the numbers 'backwards now', explained more below
    
    for(let i = 0; i<reverse.length-1;i++){
        post = post * reverse[i];
        postfix_output.push(post);
    }
    
    /* 
    
    our example array: [1,2,3,4]
    
    our reversed array: [4,3,2,1]
    
    why are we doing this backwards now? We are now getting the product of the numbers on the 'right hand side'.
    
    what is the point of postfit_output array: to multiply the numbers after the number we are on in the array.
    
    why is our post value 1? 
    What is before 4 in our example array? Nothing. So we need a 1 as a placeholder. 
    
    In the same way that we needed a 1 as a our placeholder when we were looking at what was befor the 1 in the array
    (nothing))
    
    to cycle through the loop:
    
    our post value = 1 
    
    1 (our pre value) * 4 (our first number in our reversed array) = 4
    
    our pre value is: 4
    
    4 (our pre value) * 3 (our second number in our array) = 12
    
    our pre value is: 12
    
    12 (our pre value) * 2 (our third number in our array) = 24
    
    the next value is not included in our array as I have length-1 in my for loop.
    
    Why do I have length-1 in my for loop?
    
    When we have a 1 in our array, that means we only have 3 remaining spots in our array available to mirror
    the amount in our original array.
    
    to put the postvalue array here: [1,4,12,24]
    
    so for the array [1,2,3,4]
    
    to describe how our post-value array [1,4,12,24] pertains to our array:
    
    first value 1 -> the default value before our 1st number in our array
    
    second value 4 -> the product of the numbers before (1) * the current number in the reversed array (4) = 4
    
    third value 12 -> the product of the numbers before (4) * the current number in the reversed array (3) = 12
    
    fourth value  24 -> the product of the numbers before (12) * the current number in the array (2) = 24
    
    
    */
    
    
    for(let i = 0; i < prefix_output.length; i++){
        answer.push(prefix_output[i] * postfix_output[postfix_output.length-1]);
        postfix_output.pop();
    }
    
    /* 
    
    For our answer array (which is originally empty) we are doing:
    
    prefix_output [i] -> our value at the i index of the prefix_output
    
    postfix_output[postfix_output -1] -> the last element in our postfix_output array
    
    (we are multiplying the above first)
    
    Then we are popping off the last element in the postfix_output so we can continue to cycle through the array.
    
    Why are we doing this? 
    
    prefix array -> has the product of the numbers before we reach the number we are on in the array
    
    post array -> has the product of the numbers after the number in the array we are on
    
    We are coming those two halves to have the full product of the numbers without including the number we are currently on.
    
    */
    
    // console.log(postfix_output);
    
    // console.log(answer);
    return answer;
    
    
    
 
    
    
    
    
};
