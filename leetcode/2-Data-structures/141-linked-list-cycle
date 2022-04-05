// leetcode problem: https://leetcode.com/problems/linked-list-cycle/
// youtube video for help: https://youtu.be/wDgDAOVqhhA


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    
    // set both fast + slow to same starting -> head
    
    let fast = head;
    let slow = head;
    
    while(fast && fast.next) {
        
        // while fast + fast.next have a value not null
        
        // why do we have to do fast.next in addition to fast?
        
        /* 
        
        example: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null 
        
        1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null 
        f
        s
        
        1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null 
             s    f
        
        the while loop checks that where fast currently is is not null,
        and the one after it is also not null (4)
        
        if yes, do again
        
        1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null 
                  s         f
                  
        is fast true? it is 5, yes
        is fast.next true? it is 6, yes
        
        1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null 
                       s               f
        
        is fast true? no, it is null
        
        it then breaks out of the loop and returns false
        
        
        so the reason we want to do fast + fast.next is that when we get to the next iteration we are not callling fast.next on a null value
        
        if we were to call it on a null value, only doing fast, we would be doing fast.next on null which would throw an error
        
        */
        
        
        
        fast = fast.next.next;
        slow = slow.next;
        
        if(fast === slow) return true;
    }
    
    return false;
    
};
