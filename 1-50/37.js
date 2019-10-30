/**
 * 37. 解数独
 * 
 */

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 * 
 * 回溯法 
 * 100.00% 69.23%
 */
let solveSudoku = function (board) {
  let rowUsed = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
  ];
  let colUsed = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
  ];
  let boxUsed = [
    [
      [],
      [],
      []
    ],
    [
      [],
      [],
      []
    ],
    [
      [],
      [],
      []
    ]
  ];
  let r, c, num;
  for (r = 0; r < 9; r++) {
    for (c = 0; c < 9; c++) {
      num = Number(board[r][c]);
      if (num) {
        rowUsed[r][num] = true;
        colUsed[c][num] = true;
        boxUsed[Math.floor(r / 3)][Math.floor(c / 3)][num] = true;
      }
    }
  }
  // 先看那些位置只能填一个,填上
  placeSingleVailable(board, rowUsed, colUsed, boxUsed);
  // 递归尝试填充数组 
  recusiveSolveSudoku(board, rowUsed, colUsed, boxUsed, 0, 0);
};
// 把只能填一个数字的位置填上
function placeSingleVailable(board, rowUsed, colUsed, boxUsed) {
  let r, c,flag = true;
  while(flag){
    flag = false;
    for (r = 0; r < 9; r++) {
      for (c = 0; c < 9; c++) {
        if(board[r][c] === '.'){
          num = canOnlyPlace(rowUsed,colUsed,boxUsed,r,c);
          if(num){
            // 当前只要填充了一个,下一轮就还要扫描
            flag = true;
            board[r][c] = String(num);
            rowUsed[r][num] = true;
            colUsed[c][num] = true;
            boxUsed[Math.floor(r/3)][Math.floor(c/3)][num] = true;
          }
        }
      }
    }
  }
}
// 若仅能放置一个数字,返回该数字,否则返回0
function canOnlyPlace(rowUsed,colUsed,boxUsed,r,c){
  let res = 0,i;
  for(i=1;i<=9;i++){
    if(canPlace(rowUsed,colUsed,boxUsed,r,c,i)){
      if(res){
        return 0;
      }
      res = i;
    }
  }
  return res;
}

// 能否在R C 位置放i
function canPlace(rowUsed,colUsed,boxUsed,r,c,i){
  return !(rowUsed[r][i] || colUsed[c][i] || boxUsed[Math.floor(r / 3)][Math.floor(c / 3)][i]);
}

function recusiveSolveSudoku(board, rowUsed, colUsed, boxUsed, r, c) {
  if (c === 9) {
    c = 0;
    r++;
    if (r === 9) {
      return true;
    }
  }
  let i, canPut;
  if (board[r][c] === '.') {
    // 尝试放 1 - 9
    for (i = 1; i <= 9; i++) {
      canPut = canPlace(rowUsed,colUsed,boxUsed,r,c,i);
      if (canPut) {
        rowUsed[r][i] = true;
        colUsed[c][i] = true;
        boxUsed[Math.floor(r / 3)][Math.floor(c / 3)][i] = true;
        board[r][c] = String(i);
        if (recusiveSolveSudoku(board, rowUsed, colUsed, boxUsed, r, c + 1)) {
          return true;
        }
        rowUsed[r][i] = false;
        colUsed[c][i] = false;
        boxUsed[Math.floor(r / 3)][Math.floor(c / 3)][i] = false;
        board[r][c] = '.';
      }
    }
  } else {
    return recusiveSolveSudoku(board, rowUsed, colUsed, boxUsed, r, c + 1);
  }
  return false;
}

let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];
solveSudoku(board);
console.log(board);