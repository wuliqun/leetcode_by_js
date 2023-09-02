/**
 * 74. 搜索二维矩阵(升序)
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * 73.56% 73.86%
 */
let searchMatrix = function(matrix, target) {
  let m = matrix.length;
  if(!m) return false;
  let n = matrix[0].length;
  if(!n) return false;
  if(target < matrix[0][0] || target > matrix[m-1][n-1]) return false;
  let start = 0,end = m-1,index,mid,tmp;
  // 二分查找 在那个子数组范围内,获得index
  while(start <= end){
    index = end + start >> 1;
    if(target > matrix[index][n-1]){
      start = index + 1;
    }else if(target < matrix[index][0]){
      end = index - 1;
    }else{
      break;
    }
  }
  start = 0,end = n-1;
  // 在matrix[index] 内二分查找
  while(start <= end){
    mid = start + end >> 1;
    tmp = target - matrix[index][mid];
    if(tmp > 0){
      start = mid + 1;
    }else if(tmp < 0){
      end = mid - 1;
    }else{
      return true;
    }
  }
  return false;
};

