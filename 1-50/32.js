/**
 * 32. 最长有效括号
 *    在子序列中找出最长的有效括号
 * 
 *   思路:
 *      用栈存储左括号index,
 *      遇到右括号时pop,并比较当前索引和栈顶索引,得到当前有效括号长度
 */

/**
 * @param {string} s
 * @return {number}
 * 90.30% 80.00%
 * 
 */
let longestValidParentheses = function(s) {
  let len = s.length,left  = [],res = 0,last = -1;
  for(i=0;i<len;i++){
    if(s[i] === '('){
      left.push(i);
    }else{
      if(left.length === 0){
        last = i;
      }else{
        left.pop();
        if(left.length === 0){
          res = Math.max(res,i - last);
        }else{
          res = Math.max(res,i - left[left.length - 1]);
        }
      }
    }
  }
  return res;
}

console.log(longestValidParentheses(")()())"))
console.log(longestValidParentheses("()()"))
console.log(longestValidParentheses("()"))