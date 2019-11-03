/**
 * 5222. 分隔平衡字符串
 *  在一个「平衡字符串」中，'L' 和 'R' 字符的数量是相同的。
 *  给出一个平衡字符串 s，请你将它分割成尽可能多的平衡字符串。
 *  返回可以通过分割得到的平衡字符串的最大数量。
 *  
 */


/**
 * @param {string} s
 * @return {number}
 */
let balancedStringSplit = function(s) {
  let len = s.length,i,res = 0,stack = [],tmpLen;
  for(i=0;i<len;i++){
    tmpLen = stack.length;
    if(tmpLen === 0 || stack[tmpLen - 1] === s[i]){
      stack.push(s[i]);
    }else{
      stack.pop();
      if(tmpLen === 1){
        res ++;
      }
    }
  }
  return res;
};