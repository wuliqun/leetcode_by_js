/**
 * 20. 有效的括号
 */

/**
 * @param {string} s
 * @return {boolean}
 * 
 * 97.56% 54.26%
 */
let isValid = function(s) {
  let stack = [],len = s.length,i=0,tmp;
  while(i < len){
    tmp = s[i];
    if(/\(|\{|\[/.test(tmp)){
      stack.push(tmp);
    }else{
      if(/\(\)|\{\}|\[\]/.test(stack[stack.length - 1] + tmp)){
        stack.pop();
      }else{
        return false;
      }
    }
    i ++;
  }
  return stack.length === 0;
};