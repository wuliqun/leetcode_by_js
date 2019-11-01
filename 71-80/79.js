/**
 * 79. 单词搜索
 *    查找一个单词是否存在于二维网格中
 *    单词只能由相邻的网格字母组成,网格字母不能重复使用
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 * 回溯法查找,先找到第一个字母,把该网格置为0
 * 再回溯
 * 98.21% 79.41%
 */
let exist = function (board, word) {
  if (!word) return true;
  let m = board.length;
  let n = board[0] && board[0].length;
  if (!m || !n) return false;
  let i, j, tmp ,res;
  for (i = 0; i < m; i++) {
    for (j = 0; j < n; j++) {
      if (board[i][j] === word[0]) {
        tmp = board[i][j];
        board[i][j] = 0;
        res = backtrack(board, word, 1, i, j);
        board[i][j] = tmp;
        if(res) return true;
      }
    }
  }
  return false;
};
/**
 *
 *
 * @param {*} board
 * @param {*} word
 * @param {*} index 当前搜索到第几个字母
 * @param {*} i,j  前一个的网格坐标
 */
function backtrack(board, word, index, i, j) {
  if (index === word.length) {
    return true;
  } else {
    let tmp, res;
    // 上
    if (i > 0) {
      if (board[i - 1][j] === word[index]) {
        tmp = board[i - 1][j];
        board[i - 1][j] = 0;
        res = backtrack(board, word, index + 1, i - 1, j);
        board[i - 1][j] = tmp;
        if(res) return true;
      }
    }
    // 左
    if (j > 0) {
      if (board[i][j - 1] === word[index]) {
        tmp = board[i][j - 1];
        board[i][j - 1] = 0;
        res = backtrack(board, word, index + 1, i, j - 1);
        board[i][j - 1] = tmp;
        if(res) return true;
      }
    }
    // 下
    if (i < board.length - 1) {
      if (board[i + 1][j] === word[index]) {
        tmp = board[i + 1][j];
        board[i + 1][j] = 0;
        res = backtrack(board, word, index + 1, i + 1, j);
        board[i + 1][j] = tmp;
        if(res) return true;
      }
    }
    // 右
    if (j < board[0].length - 1) {
      if (board[i][j + 1] === word[index]) {
        tmp = board[i][j + 1];
        board[i][j + 1] = 0;
        res = backtrack(board, word, index + 1, i, j + 1);
        board[i][j + 1] = tmp;
        if(res) return true;
      }
    }
  }
  return false;
}
let arr = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]
console.log(exist(arr,'ABCCF')) // true
console.log(exist(arr,'ABCCEDF')) // true
console.log(exist(arr,'ABCEC')) // false
console.log(exist(arr,'SADEC')) // true
console.log(exist(arr,'SEEE')) // true