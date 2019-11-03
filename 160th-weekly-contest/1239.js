/**
 * 1239. 串联字符串的最大长度
 *    给定一个字符串数组 arr，字符串 s 是将 arr 某一子序列字符串连接所得的字符串，
 *    如果 s 中的每一个字符都只出现过一次，那么它就是一个可行解。
 *    请返回所有可行解 s 中最长长度。
 * 
 */

/**
 * @param {string[]} arr
 * @return {number}
 * 
 * 回溯法,每个字符串都有选与不选两种选择
 * 96.00% 100.00%
 */
let maxLength = function (arr) {
  let res = [];
  backtrace(arr,'',0,res);
  return Math.max.apply(null,res);      
};
function backtrace(arr,s,index,res){
  if(index === arr.length){
    res.push(s.length);
    return;
  }
  backtrace(arr,s,index +1,res);
  if(canBeChoose(s,arr[index])){
    backtrace(arr,s+arr[index],index+1,res);
  }
}
function canBeChoose(s,s2){
  let len = s2.length,i;
  // s2自身是否包含重复字母
  for(i=len-1;i>=0;i--){
    if(s2.indexOf(s2[i]) !== i) return false;
  }
  // s2是否包含s中已有字母
  for(i=0;i<len;i++){
    if(s.indexOf(s2[i]) !== -1) return false;
  }
  return true;
}