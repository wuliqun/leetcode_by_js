/**
 * 40. 组合总和
 *      找出数组元素可以组成target的所有组合,数组元素不可重复使用
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
let combinationSum2 = function(candidates, target) {
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
    tmp.push(candidates[i]);
    backtrace(candidates,i + 1,target-candidates[i],tmp,res);
    tmp.pop();
    while(candidates[i] === candidates[++i]){}
    backtrace(candidates,i,target,tmp,res);
  }
}