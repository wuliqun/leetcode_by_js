/**
 * 17.电话号码的字母组合
 */

/**
 * 回溯法
 * 
 * @param {string} digits
 * @return {string[]}
 * 89.72% 43.01%
 */
const dic = {
  2:'abc',
  3:'def',
  4:'ghi',
  5:'jkl',
  6:'mno',
  7:'pqrs',
  8:'tuv',
  9:'wxyz'
};
let letterCombinations = function(digits) {
  let res = [];
  if(digits){
     backtrace(digits,0,'',res);
  }
  return res;
};
function backtrace(digits,index,tmp,res){
  if(index === digits.length){
    res.push(tmp);
    return ;
  }
  let letters = dic[digits[index]],i,len = letters.length;
  for(i=0;i<len;i++){
    backtrace(digits,index + 1,tmp + letters[i],res);
  }
}