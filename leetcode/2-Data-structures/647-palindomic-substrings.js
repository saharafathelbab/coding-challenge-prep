// leetcode: https://leetcode.com/problems/palindromic-substrings/

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    
    let count = 0; // keeping track how many
    
    for(let i = 0; i < s.length; i++){
        
        for(let j = i; j < i+2; j++){
            
            /*
            
            i -> is the leader and will traverse each letter since each letter is a palandomic substring
            
            j -> in charge of the next letter of i to check the palandromic substrings which are length 2
            
            */
            
            let left = i;
            
            let right = j;
            
            /*
            
            left and right pointers -> check on the neighbors, will explain in example
            
            */
            
            while(left >= 0 && right < s.length && s[left] === s[right]){
                
                count++;
                left--;
                right++;
            }
        }
    }
    
    return count;
    
};


/*

example: "abc"

count = 0

i = 0

j = 0

left = 0;

right = 0;

while (left >= 0 && right < s.length && s[left] === s[right])
        0   >= 0 &&    0 <  s.length && s[0]   ===  s[0]
                                          a           a

count++
left--
right++

count = 1
left = -1
right = 1

we then go back into the while loop again

while (left >= 0 && right < s.length && s[left] === s[right])
        -1   >= 0 &&    1 <  s.length && s[-1]   ===  s[1]

The first and last condiition in the while loop are not true, we exit out of the while loop, and return to our for loops to increment i and j

remember our string: "abc"

count = 1

i = 1

j = 1

left = 1

right = 1

while (left >= 0 && right < s.length && s[left] === s[right])
        1   >= 0 &&    1 <  s.length && s[1]   ===  s[1]
                                          b           b
count++
left--
right++

count = 2
left = 1-1 = 0
right = 1+1 = 2

we then go back into the while loop again

while (left >= 0 && right < s.length && s[left] === s[right])
        0   >= 0 &&    2 <  s.length && s[0]   ===  s[2]
                                          b           c
                                          
The third condiiton of the while loop is not true, so we exit out of the while loop and return to our for loops to increment i and j

remember our string: "abc"

count = 2

i = 2

j = 2

left = 2

right = 2

while (left >= 0 && right < s.length && s[left] === s[right])
        2   >= 0 &&    2 <  s.length && s[2]   ===  s[2]
                                          b           b

count++
left--
right++

count = 3
left = 2-1 = 1
right =2+1 = 3

we then go back into our while loop








*/
