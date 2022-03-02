#leetcode problem: https://leetcode.com/problems/serialize-and-deserialize-binary-tree/

# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Codec:

    def serialize(self, root):
        """Encodes a tree to a single string.
        
        :type root: TreeNode
        :rtype: str
        """
        
        result = []; #this will hold all of our string values 
        
        def depthandsearch(node):
            #default: if there is no node value => push the letter "N" to the array
            if not node:
                result.append("N")
                return
            
            result.append(str(node.val)) #if there is a value -> push that value to the results array as a string
            
            depthandsearch(node.left) #recursively do the same thing for the left side of the node
            depthandsearch(node.right) #recursively do the same thing for the right side of the node
            
            # print(result)
        
        depthandsearch(root)
        return ",".join(result); # join the results rogether in a string, separated by commas
        

        
        
        

    def deserialize(self, data):
        """Decodes your encoded data to tree.
        
        :type data: str
        :rtype: TreeNode
        """
        
        values = data.split(",") # splitting string to an array
        
        self.i = 0  # global variabl i
        
        def depthandsearch(): #no need to declare anything in parameters because we have a global value
            if values[self.i] == "N": # if the value at index self.i is equal to N, then we are first incrementing self.i so it moves to next one in array, and then returning None
                self.i += 1
                return None
            
            node = TreeNode(values[self.i]) # we are setting the initial tree node/head
            
            self.i += 1
            
            node.left = depthandsearch() # the left side of the node we declared above, we are having it recursively go through the steps above (null or number)
            node.right = depthandsearch() # the right side of the node we declared above, we are having it recursively go through the steps above (null or number)
            
            return node # we are returning our head node 
        
        return depthandsearch() # we are returning the value we get when run depthandsearch() which will give us the entire tree along with it
    
# Your Codec object will be instantiated and called as such:
# ser = Codec()
# deser = Codec()
# ans = deser.deserialize(ser.serialize(root))
