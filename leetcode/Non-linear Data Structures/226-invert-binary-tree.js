/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    
    //got through L and R
    
    let reverseBinary = (node) =>{
        //base case: if null go back to caller
        
        if(node == null){
            return;
        }
        
      // recursion -> we are calling the function within itself
        reverseBinary(node.left);
        reverseBinary(node.right);
        
        hold = node.left;
      
      // hold -> a variable where we are storing the content of the left side of the node that is acting as our point of reference
        
        node.left = node.right;
      // node.left -> we are swapping the contents that are in node.left to equal that of the right side of the node instead
        
        node.right = hold;
      // node.right -> we are setting it to our variable we declared above as having the left side contents of the node in variable hold
      
    }
    
    
    reverseBinary(root);
    return root;
};
