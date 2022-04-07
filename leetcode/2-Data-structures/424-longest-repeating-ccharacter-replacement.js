// leetcode: https://leetcode.com/problems/longest-repeating-character-replacement/

// youtube video for help in understanding: https://youtu.be/gqXU1UyA8pk
// article for help: https://dev.to/cod3pineapple/leetcode-424-longest-repeating-character-replacement-javascript-solution-3hjb

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    
    let count = {}; // our hash map
    
    let left = 0; // our left pointer
    
    let maxFrequency = 0;
    
    let result = 0; // our result i.e our window length that is our max we can be
    
    // we are looping through the array with our right pointer 
    
    for(let right = 0; right < s.length; right++){
        
        let letter = s[right];
        
        // for our hash, we are saying for the value at s[right] do a +1 to our current count in place
        // if s[right] is new to our hash, then we set it to 0
        
        count[letter] = 1 + (count[letter] || 0);
        
        // update chatacter frequency
        
        // we are taking the max of our value currently in place for MaxFrequency, and for the current value we are at in our for loop, the # for the count of it in the hash; the number value of maxFrequency will be the largest value in count hash
        
        maxFrequency = Math.max(maxFrequency, count[letter]);
        
        // while window is not valid
        
        while((right-left+1) - maxFrequency > k){ 
            
            /*
            
            what does right-left+1 mean? 
            
            That is the length of our window.
            
            How?
            
            for example:
            
            A B A B B A
            
            let's say our left pointer is at index 0 and our right pointer is at index 4
            
            A B A B B A
            0 1 2 3 4 5
            
            A B A B B A
            L       R
            
            right - left = right index position minus left index position
            
            4 - 0 = 4
            
            What is the length of A B A B B? 
            
            There are 5 characters, so it's length is 5. 
            Remember, we start our index at 0, so counting length wise, if going based on indexes like this, we are 1 off!
            
            hence the plus 1
            
            4 + 1 = 5
            
            right - left + 1
              4      0   + 1 = 5
              
              
            while our window length minus our max count number is greater than our K value
            
            */
            
            count[s[left]] -= 1 // decrement the count of the character at left position;
            left++; // move the left pointer one to the right
        }
        
        result = Math.max(result, right-left+1)
        
        // result = the max of result value currently in place, and the window length
        
        // how does it exit out of loop?
        
        // when we find a window that is valid, and if we were to decrement further from the left hand side we would have a less value than what we already have in place for result
        
    }
    
    return result; 
};
