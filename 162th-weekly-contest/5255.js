/**
 * 5255. 奇数值单元格的数目
 *    给你一个 n 行 m 列的矩阵，最开始的时候，每个单元格中的值都是 0。
 *    另有一个索引数组 indices，indices[i] = [ri, ci] 中的 ri 和 ci 分别表示指定的行和列（从 0 开始编号）。
 *    你需要将每对 [ri, ci] 指定的行和列上的所有单元格的值加 1。
 *    请你在执行完所有 indices 指定的增量操作后，返回矩阵中 「奇数值单元格」 的数目。
 */

/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
let oddCells = function(n, m, indices) {
  if(!n || !m) return 0;
  let board = new Array(n);
  let i,j,k,res = 0;
  for(i=0;i<n;i++){
    board[i] = new Array(m).fill(0);
  }
  for(k = 0;k<indices.length;k++){
    let [r,c] = indices[k];
    for(j = 0;j<m;j++){
      board[r][j] ++;
    }
    for(i = 0;i<n;i++){
      board[i][c] ++;
    }
  }
  for(i=0;i<n;i++){
    for(j =0;j<m;j++){
      if(board[i][j] % 2 === 1) res ++
    }
  }
  return res;
};