//Objective is to find the largest area of an 'island' in a 2-D array
//An island is defined by 1's grouped up

//O(n) solution that includes a dfs through the 2-D array

let grid = 
[
[0,0,1,0,0,0,0,1,0,0,0,0,0],
[0,0,0,0,0,0,0,1,1,1,0,0,0],
[0,1,1,0,1,0,0,0,0,0,0,0,0],
[0,1,0,0,1,1,0,0,1,0,1,0,0],
[0,1,0,0,1,1,0,0,1,1,1,0,0],
[0,0,0,0,0,0,0,0,0,0,1,0,0],
[0,0,0,0,0,0,0,1,1,1,0,0,0],
[0,0,0,0,0,0,0,1,1,0,0,0,0]
]

let area = 0

for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
        area = Math.max(area, dfs(grid, i, j))
    }
}

//In this dfs function, we first check the boundaries
//Then, if the boundaries are good, we increase the count of the island size by 1
//Then we pass this new count into our dfs function to check up, down, right, and left
function dfs(grid, i, j, count = 0) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] == 0) {
        return count
    }
    count++

    grid[i][j] = 0
    
    count = dfs(grid, i + 1, j, count)
    count = dfs(grid, i - 1, j, count)
    count = dfs(grid, i, j + 1, count)
    count = dfs(grid, i, j - 1, count)

    return count
}

return area