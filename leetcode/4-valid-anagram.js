// leetcode problem: https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    // what do we know?
    // s is our word/letter bank
    // t is if we use all letter that in s then true
    
    return s.split('').sort().join('') == t.split('').sort().join('');
    
    //.split('') -> splits the characters, and turns our string into an array. 
    // The '' indicates what we want to split each string character by, in this case '' menas we are splitting it by every character. 
    // If for example we were to have a space in between like so ' ' that would mean we are splitting the string into an array based on whereever there are spaces in the string. For example 'the dog says woof' would be [the,dog,says,woof] as we are separating each array elment based on the spaces in the original string.
    
    // .sort -> sorts our array alphabetically
    // .join('') ->  joins all elements in the array together as a string back again
    
    // if the strings are equal to one another after the above split, sort, and join then it returns true, otherwise it returns false.
    
};
