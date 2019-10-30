/* 09. 判断一个整数是否为回文数 */

/**
 * @param {number} x
 * @return {boolean}
 * 
 * 94.64% 44.17%
 */

let isPalindrome = function(x) {
  if(x < 0) return false;
  let s = String(x),start = 0,end = s.length - 1;
  while(start < end){
    if(s[start] === s[end]){
      start ++;
      end --;
    }else{
      return false;
    }
  }
  return true; 
};