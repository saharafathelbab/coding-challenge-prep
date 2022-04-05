// leetcode problem: https://leetcode.com/problems/3sum/

// help from: https://youtu.be/54VcLqAHrHk

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/* 

example array: [-3,-1,1,2,5]

i=0
left = i+1
right = nums.length -1
target = 0 - nums[i]
sum = nums[left] + nums[right]

i = 0;
left = 0 + 1 = 1
right = 5 -1 = 4
target = 0 - (-3) = 3
sum = nums[1] + nums[4] = -1 + 5 = 4

sum 4 > target 3

sum is greater than target

case 1: sum > target
eliminate last element

why?

If we were to take 5 and take it in combination with any other
element (except -1), our sum will be always bigger than our target number

with just 1 compariation we are able to tell no matter what element we pick in our array, nothing will work with the element 5

elimate last element = moving our right bound to the left

right = right -1 // decrement



array: [-3,-1,1,2,5]

sum = nums[left] + nums[right]

i = 0;
left = 1
right = 3
target = 3
sum = nums[1] + nums[3] = -1 + 2 = 1

sum 1 < target 3

sum is less than target

eliminate first element in our sub array

why?

No matter what element we combine with -1, it will never be equal to our target number so -1 is not part of our solution set

eliminate first element = incrementing left bound

left = left + 1 // increment

array: [-3,-1,1,2,5]

sum = nums[left] + nums[right]

i = 0;
left = 2
right = 3
target = 3
sum = nums[2] + nums[3] = 1 + 2 = 3

sum 3 = target 3

case 3: sum == target





*/



var threeSum = function(nums) {
    
    let answer = [];
    
    nums.sort(function(a,b){return a-b}); // sort array from least to greatest number
    
    for(let i =0; i < nums.length; i++){
        
        // if i is greater than 0 and the number at i is the same as the one before it, do not count the repeat, continue
        if(i>0 && nums[i] === nums[i-1]) continue;
        
        let target = 0 - nums[i]; // 0 - the first number in the array.
        let left = i +1; // index after target
        let right = nums.length-1; // index that is last number in array
        
        while(right > left){
            let sum = nums[left] + nums[right]; // sum = number at index nums[left] + number at index nums[right]
            
            if(sum > target){ // sum greater than target (view above example)
                right--;
            } else if(sum < target){ // sum less than target
                left++;
            } else {
              
              // when sum == target
                
                answer.push([nums[i], nums[left], nums[right]]); // pushing our nums[i], nums[left] and nums[right]
                
              // the left and right numbers = target so that means together they will equal 0
                
                // example array: -4,0,0,1,3,4
                // our first triplet is -4, 0, 4
                // when we find the first triplet, we want to make sure we skip all the duplicates, in this case the zeros.
                // issue is: we don't know how many duplicates we have 0 1 2 3 in a large array
                // for this reason we need a while loop
                
                while(nums[left] == nums[left+1]) left++ // we will skip the duplicates
                
                while(nums[right] == nums[right-1]) right-- //we will skip the duplicates
                
                left++;
                right--;
                
                //why increment + decrement? so we can continue on to look for other solutions in our array.
                
        }
    }
}
    
    console.log(answer)
    return answer;
};
