/**
 * 51. n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 *    返回不同的解法
 */

/**
 * @param {number} n
 * @return {string[][]}
 * 67.65% 38.89%
 */
let solveNQueens = function(n) {
  let res = [];
  let board = new Array(n),i,j;
  for(i = 0;i<n;i++){
    board[i] = new Array(n).fill('.');
  }
  backtrack(board,0,res);
  return res;
};
/**
 * 回溯放置皇后
 *
 * @param {*} board
 * @param {*} i
 * @param {*} res
 */
function backtrack(board,i,res){
  let n = board.length;
  if(i === n){
    res.push(board.map(item=>item.join('')));
  }else{
    let j;
    for(j = 0;j < n;j++){
      if(canPlace(board,i,j)){
        board[i][j] = 'Q';
        backtrack(board,i+1,res);
        board[i][j] = '.';
      }
    }
  }
}
/**
 * 能否在 i,j位置放皇后
 * i 之后肯定是没有的
 * 所有只需查找上 左上 右上
 * @param {*} board
 * @param {*} i
 * @param {*} j
 */
function canPlace(board,i,j){
  let k,l;
  // 上
  for(k = 0;k < i;k++){
    if(board[k][j] === 'Q') return false;
  }
  // 左上
  k = i,l = j;
  while(k > 0 && l > 0){
    k--;
    l--;
    if(board[k][l] === 'Q') return false;
  }
  // 右上
  k = i,l = j;
  while(k > 0 && l < board.length - 1){
    k --;
    l ++;
    if(board[k][l] === 'Q') return false;
  }
  return true;
}

console.log(solveNQueens(8));