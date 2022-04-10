// leetcode: https://leetcode.com/problems/number-of-islands/
// youtube video for help: https://youtu.be/PbsNVXacaVU



/**
 * @param {character[][]} grid
 * @return {number}
 */

let getAdjNeighbors = (i, j, grid, visited) => {
    
    let adjNeighbors = [];
    
    // top, left righht and left of the cell - push to the array
    
    // what is i?
    
    // on the vertical side, the top left value
    
    //if i is greater than 0 thatt means there is a cell above it.
    
    // if 0 then there is no cell above it
    
    // and cell not visited at i -1 (above)[j] to the right of it
    
    if(i > 0 && !visited[i-1][j]) adjNeighbors.push([i-1, j])
    
    // for below
    
    // need to make sure our i index is at index of 2 to make sure there is something below it to check
    
    if(i < grid.length-1 && !visited[i+1][j]) adjNeighbors.push([i+1, j]);
    
    // for the left of it
    
    if(j > 0 && !visited[i][j-1]) adjNeighbors.push([i, j-1]);
    
    // for the right of it
    
    if(j < grid[0].length-1 && !visited[i][j+1]) adjNeighbors.push([i, j+1]);
    
    
    return adjNeighbors;
}


    // depth first search helper function
    
    let dFS = (i, j, grid, visited) => {
        /*
        
        dS -> it's going to be a stack
        
        */
        
        let stack = [[i,j]];
        
        let islandSize = 0;
        
        while(stack.length){
            let curNode = stack.pop();
            
            /* 
            
            what do we need to do? 
            
            we need to destructure out the i and the j thaat's in the current node
            
            */
            
            let [i, j] = curNode;
            
            // is that cell visited in our grid?
            
            // check if visited at i and j
            
            if(visited[i][j]) continue; // don't count, skip
            
            visited[i][j] = true; // add that into the visited array if not.
            
            // we want to make sure when we are at the particular cell that there's a 1 there, if it's a 0 we can skip it
            
            // check if cell is an island component / part of an island
            
            if(grid[i][j] === '0') continue;
            
            // if it is a 1, increment island size
            
            islandSize++;
            
            // if a 1 check everything to the left, right, top, bottom of it
            
            let adjNeighbors = getAdjNeighbors(i,j,grid,visited);
            
            // push all adj neighbors to stack
            
            stack.push(...adjNeighbors);
        }
        
        return islandSize > 0 ? true : false;
    };
    
    
    
var numIslands = function(grid) {
    

    
    let visited = grid.map(row => row.map(cell => false));
    
    /* 
    
    what are doing: we are creating a copy of the grid, where we are filling each cell in the row as false.
    
    next - we need to create a global variable to count the number of islands
    
    */
    
    let islandCount = 0; // counts the amount of times we are traversing this grid
    
    for (let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            
            // what are we doing: checking if the depth first search is returning a true or false
            // true -> island
            
            if(dFS(i,j,grid,visited)){
                islandCount++;
            }
            
        }
    }
    
    
    
    return islandCount;
    
    
    
};
