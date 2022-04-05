// leetcode problem:https://leetcode.com/problems/reverse-linked-list/
// youtube video for help: https://youtu.be/DT3KOnLWR_o



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    
    let current = head; // where our pointer begins
    
    // at the start these are set to null, for previous it is set to null as we are swapping the pointers around so that the very first element's previous is null i.e. our new end
    
    // for next -> it's not needed to set to null as we are going to be shifting it/letting it have a value soon, but I just set to null for continuity purposes
    
    let previous = null;
    let next = null;
    
    while(current !== null){
        
        // 1 -> 2 -> 3 -> 4 -> 5
        
        /* 
        
        next = current.next
        
        I am setting the next variable to be my next element in our linked list - in the first instance this would be 2.
        
        So our next pointer is holding the spot for our exisiting current.next
        
        current.next = previous
        
        we are directing that our arrow that points to our next element should be pointed to our previous element instead - in the first instance this would be null
        
        previous = current
        
        we are now preparing for our next loop through
        
        we shifting the previous pointer to be where our current element is - in the first instance this would be 1
        
        current = next;
        
        our current pointer is now newly set to be the next variable in our linkedlist - 2.
        
        we've finished our first loop where 1 was our current, so now we shift our current pointer so 2 is our current and so on.
        
        
        
        
        */
        
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    
    return previous;
    
    /* when current = null, we return our previous node
    
    what is our previous node?
    
    After we are done with the while loop we are left with this:
    
    1 <- 2 <- 3 <- 4 <- 5 <- null
    
    in order for our while loop to complete, that would mean current is equal to null, to put the pointers of current, previous and next in place
    
    1 <- 2 <- 3 <- 4 <- 5 <- null
                        p     c
                              n 
                              
    by return previous (5) we are returning the head our new reversed linked list
    
    5 -> 4 -> 3 -> 2 -> 1
                        
    
    */
    
};
