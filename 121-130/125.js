/**
 * 125. 验证回文字符串
 */

/**
 * @param {string} s
 * @return {boolean}
 * 77.91% 20.20%
 */
let isPalindrome = function(s) {
  let start = 0,end = s.length - 1;
  s = s.toLowerCase();
  while(start < end){
    if(!/[a-z0-9]/.test(s[start])){
      start ++;
    }else if(!/[a-z0-9]/.test(s[end])){
      end --;
    }else{
      if(s[start] !== s[end]) return false;
      start ++;
      end --;
    }    
  }
  return true;
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));