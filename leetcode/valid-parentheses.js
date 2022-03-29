/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    let my_array = []; // our array to push to
    
    for(let i = 0; i < s.length; i++){
        
        let top_of_stack = my_array[my_array.length-1]; 
        
        // top of stack = the last element in our array
        
        // this works like a stack of plates
        
        // for example ([{}])
        // my_array = ['(']
        // my_array = ['(', '[']
        // my_array = ['(', '[', '{']
        
        // at the moment the '{' is considered to be the last element in our array.
        
        // What is the length of our Array? 
        // 3
        
        // What is the index of '{' in our array?
        // 2 (remember arrays start at count 0)
        
        // When we want to target a specific index in an array we follow this format: my_array[our index number we want to target]
        
        // my_array[my_array.length-1]
            // my_array.length -> 3
            // my_array[3-1]
            // my_array[2] i.e. our last element in our array.
        
            
        
        
        if(s[i] == '(' || s[i] == '{' || s[i] == '['){
            my_array.push(s[i]);
            
            // if s[i] is an opening parentheses/curly brace/bracket, we are pushing that open bracket to my_array
            
        } else if(s[i] == ')' && top_of_stack == '('){
            my_array.pop();
            
            // if s[i] is the closing parentheses AND at the top of the stack (our last element in our array) is its respective open parentheses, then we pop the last element in our array off. Why? Because we've just found it's pairing so we don't need it in our array anymore!
            
            // the goal -> find each opening parentheses/curly brace/bracket's respective closing one in the correct order :)
            
            
        } else if(s[i] == '}' && top_of_stack == '{'){
            my_array.pop();
            
            // if s[i] is the closing curly brace AND at the top of the stack (our last element in our array) is its respective open curly brace, then we pop the last element in our array off. Why? Because we've just found it's pairing so we don't need it in our array anymore!
            
            // the goal -> find each opening parentheses/curly brace/bracket's respective closing one in the correct order :)
          
        } else if(s[i] == ']' && top_of_stack == '['){
            my_array.pop();
            
            // if s[i] is the closing bracket AND at the top of the stack (our last element in our array) is its respective open bracket, then we pop the last element in our array off. Why? Because we've just found it's pairing so we don't need it in our array anymore! 
            
            // the goal -> find each opening parentheses/curly brace/bracket's respective closing one in the correct order :)
            
        } else{
            return false;
            
            // if s[i] is not the closing bracket/parentheses/curly brace to the top of the stack (last element in our array) then we return false.
            //An example scenario where this would happen:
            
            // if we have the string: "([)]"
            
            //first thing we do is if it's an opening parentheses/curly brace/bracket we push that to my_array, until we see a closing parentheses/curly brace/bracket.
            
            // my_array = ['(', '[']
            
            // our first closing is )
            
            // based on our first else if condition -> we have to check if the top of the stack (last element in our array) is its respective opening parentheses
            
            // in our array ['(', '['] the top of stack/last element in our array is an opening bracket [ , not an opening parentheses as we need.
            
            // so it does not satsify our first else if statement related to parentheses, the else if statements that follow don't have anything regarding parentheses, and so it jumps to our else brace here, and returns false as the closing for [ is not ).
            
        }
        
        
    }
    
    return my_array.length == 0;
    
    // if our array length is 0 that means we popped all the elements in our array off i.e. we found all the respective pairings in order! so this would return true
    
    // if our array length is not 0, then that means we still have an opening or closing bracket in our array that needs its respective closing pair, so this would return false
    
    // an example of this can be what if we have a string with just: [
    
    // that would return false because it's respective closing pair is not present in our array to match with it!
    

};
