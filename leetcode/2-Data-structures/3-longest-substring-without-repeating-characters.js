// leetcode: https://leetcode.com/problems/longest-substring-without-repeating-characters/
// youtube video for some help: https://youtu.be/sydRChyHRxk



/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let count = {};
    
    let left = 0;
    
    let result = 0;
    
    for(let right = 0; right < s.length; right++){
        
        let letter = s[right];
        
        count[letter] = count[letter] + 1 || 1;
        
        while(count[letter] > 1){
            
            let leftCharacter = s[left];
            
            if(count[leftCharacter] > 1){
                
                // decrementing whatever is at the start position and decrement it from the count hash and move the start window over 1
                
                //if greater than 1, we want to decremeent
                
                count[leftCharacter]--;
                
            } else{
                
                // if it is 1, then we just want to delete it
                
                delete count[leftCharacter];
                
                /* 
                
                why delete?
                
                because if it is 1, then that means it would just be at 0, so we want to delete that element out of our hash
                
                
                */
            }
            
            left++;
            
        }
        
        result = Math.max(result, (right-left) +1);
    }
    
    return result;

    
};
