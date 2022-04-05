// leetcode: https://leetcode.com/problems/merge-intervals/
// some help from youtube video: https://youtu.be/LvygwImtvEw



/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    
    intervals.sort((a,b) => a[0]-b[0]); // nlogn time, sorting by the 0th index
    
    let answer = [intervals[0]]; // interting our first index in our intervals array to our answer array
    
    for(let interval of intervals){
        
        let endOne = answer[answer.length-1][1]; // our array we pushed in, the 1st index
        
        let startTwo = interval[0]; // our first element in our exisiting intervals array 0th index; interval -> individual we are looping through
        
        let endTwo = interval[1]; // our first element in our exisiting intervals array 1st index; interval -> individual we are looping through
        
        if(endOne >= startTwo){
            
            answer[answer.length-1][1] = Math.max(endOne, endTwo)
            
            // [[1,10],[2,6],[8,10],[15,18]]
            
            // in answer array is -> [1,10]
            
            // we are seeing if 10 is greater than or equal to 2 (it is greater than)
            
            // so we are: setting the max value for index 1 to be the max between 10 and 6.
            
            
        } else{
            
            answer.push(interval);
        }
        
    }
    
    return answer;
    

    
};
