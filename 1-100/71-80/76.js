/**
 * 76. 最小覆盖子串
 *    S = "ADOBECODEBANC", T = "ABC"
 *       -> BANC
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 * 
 * 超时
 */
let minWindow = function(s, t) {
  let map = {};
  let len1 = s.length,len2 = t.length,i,j;
  // 用t串构建map,用于比较
  for(i=0;i<len2;i++){
    map[t[i]] = (map[t[i]] || 0) + 1;
  }
  // 字符串某位是否有用
  let useful = [];
  for(i=0;i<len1;i++){
    useful.push(s[i] in map);
  }
  for(j = len2;j <= len1;j++){
    for(i=0;i+j <= len1;i++){
      if(useful[i] && useful[i+j-1] && match(s.slice(i,i+j),map,j,len2)){
        return s.slice(i,i+j);
      }
    }
  }
  return '';
};
function match(s,map,len1,len){
  let newMap = {},i,count = 0;
  for(i=0;i<len1;i++){
    newMap[s[i]] = (newMap[s[i]] || 0) + 1;
    if(newMap[s[i]] <= map[s[i]]){
      count ++;
    }
  }
  return count === len;
}
/**
 * 滑动窗口法(双指针):
 *    起始位置,left,right都指向0位,
 *    right向右移动,直至能覆盖子串,记录结果
 *    left向右移动,直至不能覆盖
 *    若仍能覆盖,更新结果,若不能覆盖,right再往右移动,直至能覆盖
 * 100.00% 70.00%
 */
minWindow = function(s,t){
  let len1 = s.length,len2 = t.length,i,count = 0;
  if(!len1 ||!len2) return '';
  let map = {},res = '';
  // 用t串构建map,用于比较
  for(i=0;i<len2;i++){
    map[t[i]] = (map[t[i]] || 0) + 1;
  }
  i = j = 0;
  while(j <= len1){
    if(count < len2){
      // 不能匹配,right右移
      if(s[j] in map){
        if(map[s[j]] > 0){
          count ++;
        }
        map[s[j]] --;
      }
      j ++;
    }else{
      // 当前能匹配,与结果比较
      if(!res || res.length > j - i){
        res = s.slice(i,j);
      }
      // left右移
      if(s[i] in map){
        if(map[s[i]] === 0){
          count --;
        }
        map[s[i]] ++;
      }
      i ++;
    }
  }
  return res;
}

console.log(minWindow("ab","ba"))