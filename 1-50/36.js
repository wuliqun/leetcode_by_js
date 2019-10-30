/**
 * 36. 有效的数独
 */

/**
 * @param {character[][]} board
 * @return {boolean}
 * 
 * 94.22% 42.74%
 */
let isValidSudoku = function(board) {
  const n = 9;
  let i,j,arr = [];
  // 行
  for(i = 0;i<n;i++){
    if(!isValid(board[i])) return false;
  }
  // 列
  for(i=0;i<n;i++){
    for(j=0;j<n;j++){
      arr[j] = board[j][i];
    }
    if(!isValid(arr)) return false;
  }

  // 宫格
  for(i=0;i<n;i++){
    for(j=0;j<n;j++){
      arr[j] = board[Math.floor(i/3)*3 + Math.floor(j/3)][i%3*3+j%3];
    }
    if(!isValid(arr)) return false;
  }

  return true;
};
function isValid(nums){
  let map = {};
  for(let s of nums){
    if(s === '.') continue;
    if(map[s]) return false;
    map[s] = 1;
  }
  return true;
}