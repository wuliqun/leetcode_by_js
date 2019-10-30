/* 05. 最长回文子串 */

/**
 * 中心扩散法
 * 把每一个元素当回文中心,验证以此为中心,最长可以有多少回文
 * 
 * 改进,从中间开始往两边查找,尽早找出最长子串
 * 
 * 98.08% 79.05%
 */
let longestPalindrome = function(s) {
  if(!s) return '';
  let len = s.length,i,start = 0,end = 0; 
  let mid = len >> 1,maxLen;
  for(i=0;i<=mid;i++){
    // 中间往左
    maxLen = Math.max(longestExpand(s,mid-i,mid-i,len),longestExpand(s,mid-i,mid-i+1,len));
    if(end - start < maxLen){
      start = mid - i - (maxLen - 1 >> 1);
      end = mid - i + (maxLen >> 1);
    }
    // 中间往右, 可能越界
    if(mid + i < len){
      maxLen = Math.max(longestExpand(s,mid+i,mid+i,len),longestExpand(s,mid+i,mid+i+1,len));
      if(end - start < maxLen){
        start = mid + i - (maxLen - 1 >> 1);
        end = mid + i + (maxLen >> 1);
      }
    }
    // 判断是否已是当前最长
    if(end - start >= (mid - i) * 2){
      break;
    }
  }
  return s.substring(start,end + 1);
};
/**
 * 中心扩散法辅助函数
 * 求某个中心位置,最长扩散长度
 *
 * @param {*} s
 * @param {*} left
 * @param {*} right
 * @param {*} len
 * @returns
 */
function longestExpand(s,left,right,len){
  let L = left,R = right;
  while(s[L] === s[R] && L >= 0 && R < len){
    L --;
    R ++;
  }
  return R - L - 1;
}