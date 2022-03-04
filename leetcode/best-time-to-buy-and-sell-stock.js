//letetcode problem: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    // you want to buy when it's low
    // sell when it's high
    
    
  let max_profit = 0; // our max profit variable
  let minimum_value = prices[0]; // our initial minimum value will be the first value in the array

  for (let i = 0; i < prices.length - 1; i++) { 
      // why is there a prices.length-1 -> that's because if not, it will count the empty space besides the last number in the array. 
      // remember:
      // [7,1,5,3,6,4] -> index wise this is: 0 1 2 3 4 5. 
      // the length of the array is 6
      // our letter i represents the index value we are looking into in the array.
      // in our middle condition, if we were to put i < prices.length, that means that the for loop would run until i is no longer less than the length of the prices array. 
      // In the example I have here in the comments, that would mean that when the letter i becomes the number 6 (the length of the array) 
      // and it would loop to count the empty space/NAN to the right of the last number in our array that only goes up to index 5 (index 6 does not exist) 
      // before exiting out of the for loop
      
    minimum_value = prices[i] < minimum_value ? prices[i] : minimum_value;
      // minimum value = ternary operator
      
      // the ternary operator format is:
      
     // a condition ? an expression to run if the condition is true : an expression to run if the condition is false
      // to break down the above:
      
      // minimum value -> variable name we declared above, and are resetting here
      
      // the condition -> prices[i] < minimum value 
        // if the value at index i in the prices array is less than the minimum value we have stored.
      // (remember, initially our minimum value is set to the first value in our array, as we cycle through the array the minimum value changes per this line)
      
      // expression to run if the condition is true -> prices[i]
        // not necessarially an 'expression' here in this case *however* we are storing a new value to our minimum_value variable:
        // minimum_value = prices[i] -> we are setting minimum_value to be the value at index i of prices array.
     
     // expression to run if the condition is false -> minimum_value
      // not necessarially an 'expression' here in this case *however* saying here that the value that has been stored in minimum_value will not change
      
      // per our example I put in the comments above:
      // our array: [7,1,5,3,6,4]
      // minimum_value (initially declared above before our for loop) = arr[i] = 7
      // minimum_value = prices[i] < minimum_value ? prices[i] : minimum_value;
            // prices[i] -> 7
            // minimum_value -> 7
      // to put our above 2 values in the conditional + expressions:
            // minimum_value = 7 < 7 ? 7 : 7
                // since the condition of 7 < 7 is not true, our minimum value remains unchanged
      
      // so before we move to our next step in our for loop (which looks at 1 value at a time)
      // we have our minimum_value = 7
      
    if (prices[i + 1] - minimum_value > max_profit) {
        // if the index after i minus minimum value is less than the value we have stored in max_profit
          // carrying on from example array to fill in the numbers:
          // our array: [7,1,5,3,6,4]
          // filled in the above expression:
          // prices[i+1] -> 1
          // minimum_value -> 7
          // max_profit -> 0 (initially declared before for loop begins)
            // if (1-7 > 0) - in this instance this condition is not true, so it would then begin the next iteration in the array, with 1 as the value of arr[i] and so on
        
      max_profit = prices[i + 1] - minimum_value; 
        // if the above condition is true:
          // maximum_profit = the index after i - minimum value
    }
  }

  return max_profit;
    
    
    
    
    
    
    
    
    
    
    
    
};
