/**
 * 44. 通配符匹配
 *    ? 可匹配任意字符,
 *    * 可匹配任意字符串
 */


/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 * 超时
 */
let isMatch = function (s, p) {
  p = p.replace(/\*+/g, '*');
  let len1 = s.length - 1,
    len2 = p.length - 1;
  while (len1 >= 0 && len2 >= 0) {
    if (s[len1] === p[len2] || p[len2] === '?') {
      len1--;
      len2--;
    } else {
      break;
    }
  }
  s = s.slice(0, len1 + 1);
  p = p.slice(0, len2 + 1);
  return backtrace(s, p);

  function backtrace(s, p) {
    if (s === p || p === '*') return true;
    if (!s || !p) return false;
    if (p[0] === '?' || s[0] === p[0]) {
      let i = 1;
      let len = Math.min(s.length, p.length);
      while (i < len && (p[i] === '?' || s[i] === p[i])) {
        i++;
      }
      return backtrace(s.slice(i), p.slice(i));
    } else if (p[0] === '*') {
      if (p[1] !== '?') {
        let i = 0;
        while (s[i] !== p[1]) {
          i++;
        }
        return backtrace(s.slice(i), p) || backtrace(s.slice(i), p.slice(1));
      } else {
        return backtrace(s.slice(1), p) || backtrace(s, p.slice(1));
      }
    } else {
      return false;
    }
  }
};


/**
 * 解法二:
 *    先匹配掉模式串首尾的 非* 字符,若首尾 非* 不匹配,则匹配失败
 *    此时的p,以* 开头, 以* 结尾,中间可能还有若干 *,如 *aa*bffg*cc*
 *    以 * 分隔p字符串,得到字符片段 ['aa','bffg','cc']
 *    s 能按顺序(可跳跃,但不能重叠)分别匹配掉片段,则匹配成功
 * 100% 100%
 */


isMatch = function (s, p) {
  // 多个连续的* 和一个* 是一样的
  p = p.replace(/\*+/g, '*');
  let i = 0;
  let len = Math.min(s.length, p.length);
  // 匹配掉前面的 非* 字符
  while (i < len) {
    if (p[i] !== '*') {
      if (p[i] === '?' || p[i] === s[i]) {
        i++;
      } else {
        return false;
      }
    } else {
      break;
    }
  }
  s = s.slice(i);
  p = p.slice(i);

  // 匹配掉后面的 非* 字符
  len = s.length, len2 = p.length;
  while (len > 0 && len2 > 0) {
    if (p[len2 - 1] !== '*') {
      if (p[len2 - 1] === '?' || p[len2 - 1] === s[len - 1]) {
        len2--;
        len--;
      } else {
        return false;
      }
    } else {
      break;
    }
  }
  s = s.slice(0,len);
  p = p.slice(0,len2);
  if (p === '*' || s === p) return true;
  if (!s || !p) return false;

  // 去掉首尾的*
  p = p.slice(1, p.length - 1);

  // 以 * 号分隔出p字符片段,只要 s 能够依次匹配完字符片段,即匹配
  let segs = p.split('*'),
    index;
  len = segs.length;
  for (i = 0; i < len; i++) {
    index = indexOf(s, segs[i]);
    if (index !== -1) {
      // 匹配掉一个片段,s 前进
      s = s.slice(index + segs[i].length);
    } else {
      return false;
    }
  }
  return true;
}
// indexOf  包含 ? 
function indexOf(s, sub) {
  if (sub === '') return 0;
  let len = s.length,
    len2 = sub.length;
  let i,j;
  for (i = 0; i < len - len2 + 1; i++) {
    j = 0;
    while(j < len2 && (s[i+j] === sub[j] || sub[j] === '?')){
      j ++;
    }
    if(j === len2) return i;
  }
  return -1;
}


/**
 * 解法三:
 *    动态规划
 *      1) 状态
 *          dp[i][j] 表示s的前i个字符和p的前j个字符,能否匹配
 *      2) 转移方程
 *          s[i] === p[j] || p[j] === '?'   --> dp[i][j] = dp[i-1][j-1]
 *          p[j] === '*'
 *                dp[i][j] = dp[i][j-1]  '*' 匹配空串
 *                dp[i][j] = dp[i-1][j]   
 *      3) 初始状态
 *          
 */

isMatch = function(s,p){
  p = p.replace(/\*+/g, '*');
  let len1 = s.length,len2 = p.length;
  let dp = new Array(len1+1);
  let i,j;
  // 初始化DP
  for(i=0;i<=len1;i++){
    dp[i] = new Array(len2+1).fill(false);
  }
  dp[0][0] = true;
  dp[0][1] = p[0] === '*';
  for(i=1;i<=len1;i++){
    for(j=1;j<=len2;j++){
      if(s[i-1] === p[j-1] || p[j-1] === '?'){
        dp[i][j] = dp[i-1][j-1];
      }else if(p[j-1] === '*'){
        dp[i][j] = dp[i-1][j] || dp[i][j-1];
      }
    }
  }
  return dp[len1][len2];
}