//Objective is to find the largest area of an 'island' in a 2-D array
//An island is defined by 1's grouped up

let grid = 
[[0,0,1,0,0,0,0,1,0,0,0,0,0],
[0,0,0,0,0,0,0,1,1,1,0,0,0],
[0,1,1,0,1,0,0,0,0,0,0,0,0],
[0,1,0,0,1,1,0,0,1,0,1,0,0],
[0,1,0,0,1,1,0,0,1,1,1,0,0],
[0,0,0,0,0,0,0,0,0,0,1,0,0],
[0,0,0,0,0,0,0,1,1,1,0,0,0],
[0,0,0,0,0,0,0,1,1,0,0,0,0]]


//O(n * m) solution where n and m are the length and width of the island respectively
//We use DFS to traverse over the 2-D array

let area = 0

for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
        area = Math.max(area, dfs(grid, i, j))
    }
}

function dfs(grid, i, j, count = 0) {
    //Check the boundaries first
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] == 0) {
        return count
    }

    //If the boundaries are good, we increase the count of the island size by 1
    count++

    //Make tile 0 to make sure we don't count it again
    grid[i][j] = 0
    
    //Then we pass this new count into our dfs function to check up, down, right, and left
    count = dfs(grid, i + 1, j, count)
    count = dfs(grid, i - 1, j, count)
    count = dfs(grid, i, j + 1, count)
    count = dfs(grid, i, j - 1, count)

    return count
}

return area
