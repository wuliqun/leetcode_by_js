/**
 * 5115.删除回文子数组
 *    求最少的删除次数
 */

/**
 * @param {number[]} arr
 * @return {number}
 * 递归 分清情况 题目提交错误 不知为何
 */
let cached = {};
let minimumMoves = function(arr) {
  return dfs(arr,0,arr.length - 1);
};
function dfs(arr,l,r){
  let key = l + ',' + r;
  if(cached[key]) return cached[key];
  let res = r - l + 1,i;
  if(isPalidome(arr,l,r)){
    res = 1;
  }else{
    if(arr[l] === arr[r]){
      res = Math.min(res,dfs(arr,l+1,r-1));
    }
    res = Math.min(res,dfs(arr,l+1,r) + 1);
    for(i = l+1;i<r;i++){
      if(arr[l] === arr[i]){
        res = Math.min(res,dfs(arr,l,i)+dfs(arr,i+1,r));
      }
    }
  }
  cached[key] = res;
  return res;
}

function isPalidome(arr,l,r){
  while(l <= r){
    if(arr[l] !== arr[r]) return false;
    l ++;
    r --;
  }
  return true;
}


console.log(minimumMoves([14,20,1,16,9,20,5,10,12,12,1,17,4,9,18,9,14,6,15,12,8,16,19,5,8,16,10,14,14,9,14,3,18,17,13,16,18,16,2,5,5,12,9,13,4,16,18,5,4,16,14,4,14,6,18,4,16,20,2,9,12,1,6,16,3,18,16,15,12,15,12,20,7,10,17,4,13,17,5,14,20,7,3,4,17,14,1,11,11,10,12,5,19,4,16,14,2,5,18,4]))