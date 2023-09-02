/**
 * 130. 被围绕的区域
 *    给定一个二维的矩阵，包含 'X' 和 'O'（字母 O）。
 *    找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。
 */

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 * 回溯法,从边界上的O向内发散,可以保留的'O' 设为Y
 * 
 * 97.41% 91.67%
 */
let solve = function (board) {
  let m = board.length;
  let n = board[0] && board[0].length;
  let i, j;
  if (!m || !n) return;
  for (i = 0; i < m; i++) {
    if (board[i][0] === 'O') {
      board[i][0] = 'Y';
      backtrack(board, i, 0, m, n);
    }
    if (board[i][n - 1] === 'O') {
      board[i][n - 1] = 'Y';
      backtrack(board, i, n - 1, m, n);
    }
  }
  for (j = 0; j < n; j++) {
    if (board[0][j] === 'O') {
      board[0][j] = 'Y';
      backtrack(board, 0, j, m, n);
    }
    if (board[m - 1][j] === 'O') {
      board[m - 1][j] = 'Y';
      backtrack(board, m - 1, j, m, n);
    }
  }
  for (i = 0; i < m; i++) {
    for (j = 0; j < n; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X';
      }
      if (board[i][j] === 'Y') {
        board[i][j] = 'O';
      }
    }
  }
};

function backtrack(board, i, j, m, n) {
  if (i > 0) {
    if (board[i - 1][j] === 'O') {
      board[i - 1][j] = 'Y';
      backtrack(board, i - 1, j, m, n);
    }
  }
  if (j > 0) {
    if (board[i][j - 1] === 'O') {
      board[i][j - 1] = 'Y';
      backtrack(board, i, j - 1, m, n);
    }
  }
  if (i < m - 1) {
    if (board[i + 1][j] === 'O') {
      board[i + 1][j] = 'Y';
      backtrack(board, i + 1, j, m, n);
    }
  }
  if (j < n - 1) {
    if (board[i][j + 1] === 'O') {
      board[i][j + 1] = 'Y';
      backtrack(board, i, j + 1, m, n);
    }
  }
}