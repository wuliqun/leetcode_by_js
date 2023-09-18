/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  const m = grid.length;
  if(m === 0) return 0;
  const n = grid[0].length;
  let count = 0;
  for(let i = 0;i < m;i++){
    for(let j = 0;j < n;j++){
      if(grid[i][j] === '1'){
        count ++;
        bfs(grid, i, j, m, n);
      }
    }
  }
  return count;
};

function bfs(grid, i, j, m, n){
  grid[i][j] = '0';
  let stack = [[i, j]], pos;
  while((pos = stack.pop())){
    const [i, j] = pos;
    if(i > 0 && grid[i - 1][j] === '1'){
      grid[i - 1][j] = '0';
      stack.push([i - 1, j]);
    }
    if(i < m - 1 && grid[i + 1][j] === '1'){
      grid[i + 1][j] = '0';
      stack.push([i + 1, j]);
    }

    if(j > 0 && grid[i][j - 1] === '1'){
      grid[i][j - 1] = '0';
      stack.push([i, j - 1]);
    }
    if(j < n - 1 && grid[i][j + 1] === '1'){
      grid[i][j + 1] = '0';
      stack.push([i, j + 1]);
    }
  }
}