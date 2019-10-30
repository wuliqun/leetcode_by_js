/**
 * 39. 组合总和
 *      找出数组元素可以组成target的所有组合,数组元素可重复使用
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 98.91% 72.81%
 */
let combinationSum = function(candidates, target) {
  candidates.sort((a,b)=>a-b);
  let res = [];
  backtrace(candidates,0,target,[],res);
  return res;
};
function backtrace(candidates,i,target,tmp,res){
  if(target === 0){
    res.push([...tmp]);
  }else if(candidates.length === i || target < candidates[i]){
  }else{
    backtrace(candidates,i+1,target,tmp,res);
    tmp.push(candidates[i]);
    backtrace(candidates,i,target-candidates[i],tmp,res);
    tmp.pop();
  }
}