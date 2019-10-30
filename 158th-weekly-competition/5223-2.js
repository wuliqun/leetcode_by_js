/**
 * 5223. 可以攻击国王的皇后
 * 
 *  在一个 8x8 的棋盘上，放置着若干「黑皇后」和一个「白国王」。
 * 「黑皇后」在棋盘上的位置分布用整数坐标数组 queens 表示，「白国王」的坐标用数组 king 表示。
 * 「黑皇后」的行棋规定是：横、直、斜都可以走，步数不受限制，但是，不能越子行棋。
 *  请你返回可以直接攻击到「白国王」的所有「黑皇后」的坐标（任意顺序）。
 */

 /**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
let queensAttacktheKing = function(queens, king) {
  let board = [],i,j,res = [];
  for(i=0;i<8;i++){
    board[i] = new Array(8).fill(0);
  }
  for(i=0;i<queens.length;i++){
    board[queens[i][0]][queens[i][1]] = 1;
  }
  // 國王向8個方向查找,找出各方向上的第一個王后
  i = king[0];
  j = king[1];
  // 上
  while(--i >= 0){
    if(board[i][j] === 1){
      res.push([i,j]);
      break;
    }
  }
  i = king[0];
  // 下
  while(++i < 8){
    if(board[i][j] === 1){
      res.push([i,j]);
      break;
    }
  }
  i = king[0];
  // 左
  while(--j >= 0){
    if(board[i][j] === 1){
      res.push([i,j]);
      break;
    }
  }
  j = king[1];
  // 右
  while(++j < 8){
    if(board[i][j] === 1){
      res.push([i,j]);
      break;
    }
  }
  j = king[1];
  // 左上
  while(--i >= 0 && --j >= 0){
    if(board[i][j] === 1){
      res.push([i,j]);
      break;
    }
  }
  i = king[0];
  j = king[1];
  // 右上
  while(--i >= 0 && ++j < 8){
    if(board[i][j] === 1){
      res.push([i,j]);
      break;
    }
  }
  i = king[0];
  j = king[1];
  // 右下
  while(++i < 8 && ++j < 8){
    if(board[i][j] === 1){
      res.push([i,j]);
      break;
    }
  }
  i = king[0];
  j = king[1];
  // 左下
  while(++i < 8 && --j >= 0){
    if(board[i][j] === 1){
      res.push([i,j]);
      break;
    }
  }
  return res;
};

