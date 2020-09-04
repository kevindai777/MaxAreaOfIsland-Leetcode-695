//Java Solution

class Solution {
    public int maxAreaOfIsland(int[][] grid) {
        int max = 0;
        
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[i].length; j++) {
                max = Math.max(max, dfs(grid, i, j, 0));
            }
        }
        
        return max;
    }
    
    private int dfs(int[][] grid, int i, int j, int count) {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] == 0) {
            return count;
        }
        
        count++;
        grid[i][j] = 0;
        
        count = dfs(grid, i + 1, j, count);
        count = dfs(grid, i - 1, j, count);
        count = dfs(grid, i, j + 1, count);
        count = dfs(grid, i, j - 1, count);
        
        return count;
    }
}