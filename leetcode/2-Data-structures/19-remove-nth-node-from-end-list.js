// leetcode: https://leetcode.com/problems/remove-nth-node-from-end-of-list/
// youtube video for help: https://youtu.be/M0CLi1HwpvM

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
    let dummyHead = new ListNode(-Infinity);
    dummyHead.next = head;
    
    /*
    
    Above we've created our dummy node and connect our dummy node to the left hand side of our current list
    
    next we want a reference to that dummyHead
    
    */
    
    let resultHead = dummyHead;
    
    /*
    
    Why do we want this?
    
    Because we are going to increment that dummyHead all the way through our previous
    
    We want a reference to it so that way we know that we can return something at the end.
    
    */
    
    let count = 0 // to find our correct area for our nth node
    
    let tail = head;
    
    while(count < n ){
        
        tail = tail.next;
        
        count++;
    }
    
    /*
    
    what is happening here in this while loop?
    
    
     -Infinity - 1   2   3   4   5
                 T
         
    -Infinity - 1   2   3   4   5
                    T
                
    -Infinity - 1   2   3   4   5
                        T
    
    
    */
    
    let removedNode = head; // starts at the beginning
    let previous = dummyHead; // or previous pointer is our dummy node
    
    /*
    
    Now what do we want to do?
    
    We want to increment our tail all the way to the end
    
    */
    
    while(tail) {
        
        tail = tail.next;
        removedNode = removedNode.next;
        previous = previous.next;
    }
    
    // Okay, now what happens when tail pointer is equal to null
    
    previous.next = removedNode.next; 
    
    /*
    
    what does above line do?
    
    example:
    
    1 2 3 4 5
    
    what does our array look like at this point in our loop before that one line:
    
    -Infinity - 1   2   3   4   5
         p      RN      T
         
    -Infinity - 1   2   3   4   5
                p   RN      T
                
    -Infinity - 1   2   3   4   5
                    p   RN      T
    
    -Infinity - 1   2   3   4   5   Null
                        p   RN      T
    
    
    So what does previous.next = removedNode.next do?
    
    It makes the previous.next node equal to the element after our node that we are removing
    
    -Infinity - 1   2   3   4   5   Null
                            RN  p    T
                
    
    
    
    */
    
    return resultHead.next; 
    
    /*
    
    Why are we doing resultHead.next?
    
    Because the head of resultHead is -Infinity.
    
    so we want to return from the element after that
    
    
    */
    
    
    
};
