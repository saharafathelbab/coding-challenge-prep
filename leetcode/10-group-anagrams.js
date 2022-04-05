// leetcode: https://leetcode.com/problems/group-anagrams/
// youtube video for help: https://youtu.be/7Oyq2rC98-A


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    
    let sortedStrs = strs.map(word => word.split('').sort().join('')); // every word, sorted alphaebtically, creates a new array of sorted strings
    
    let hash = {}; // setting hash to empty object
    
    for(let i =0; i< strs.length; i++){
        
        if(!hash[sortedStrs[i]]){ // if the hash object does not have the first value in our sorted array
            
            // set the hash at that key to an empty aray with our strings at index i
            
            hash[sortedStrs[i]] = [strs[i]];
        }
        
        else{
            
            //push our strings at index i into the current array that we have set at sortedStrs hash
            
            hash[sortedStrs[i]].push(strs[i]);
            
            
            // if the hash of sortedStrs exists, push our strs[i] value into it.
            
        }
    }
    
    return Object.values(hash);
    

    
};
