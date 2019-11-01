/**
 * 77. 组合
 *    给定n,k  返回 1 - n 中所有的k个数组合
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 * 回溯法
 * 84.81% 96.77%
 */
let combine = function(n, k) {
  let res = [];
  backtrack(res,[],0,n,k);
  return res;
};
function backtrack(res,tmp,index,n,k){
  if(tmp.length === k){
    res.push([...tmp]);
  }else if(index < n){
    // 选这一位
    tmp.push(index + 1);
    backtrack(res,tmp,index + 1,n,k);
    tmp.pop();
    // 不选这一位
    backtrack(res,tmp,index+1,n,k);
  }
}

console.log(combine(3,4));