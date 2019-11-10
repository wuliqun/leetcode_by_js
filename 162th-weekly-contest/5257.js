/**
 * 5257. 统计封闭岛屿的数目
 *    有一个二维矩阵 grid ，每个位置要么是陆地（记号为 0 ）要么是水域（记号为 1 ）。
 *    我们从一块陆地出发，每次可以往上下左右 4 个方向相邻区域走，能走到的所有陆地区域，我们将其称为一座「岛屿」。
 *    如果一座岛屿 完全 由水域包围，即陆地边缘上下左右所有相邻区域都是水域，那么我们将其称为 「封闭岛屿」。
 *    请返回封闭岛屿的数目。
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
let closedIsland = function(grid) {
  let n = grid.length,m = grid[0].length;
  let i,j;
  let visited = {},res = 0;
  for(i = 0;i<n;i++){
    for(j = 0;j<m;j++){
      // 访问过了 直接跳过
      if(i + ',' + j in visited) continue;
      if(grid[i][j] === 0){
        if(isIsland(grid,i,j,n,m,visited)){
          res ++;
        }
      }
    }
  }
  return res;
};
function isIsland(grid,i,j,n,m,visited){
  let key = i + ',' + j;
  if(key in visited){
    return visited[key];
  }else{
    if(i === 0 || j === 0 || i === n-1 || j === m-1){
      visited[key] = false;
      return false;
    }else{
      let res = true;
      // 暂时设为true,防止死循环
      visited[key] = true;
      if(grid[i-1][j] === 0){
        res = res && isIsland(grid,i-1,j,n,m,visited);
      }
      if(grid[i+1][j] === 0){
        res = res && isIsland(grid,i+1,j,n,m,visited);
      }
      if(grid[i][j-1] === 0){
        res = res && isIsland(grid,i,j-1,n,m,visited);
      }
      if(grid[i][j+1] === 0){
        res = res && isIsland(grid,i,j+1,n,m,visited);
      }
      visited[key] = res;
      return res;
    }
  }
}