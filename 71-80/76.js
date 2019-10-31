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
 * 64.36% 60.00%
 */
minWindow = function(s,t){
  let len1 = s.length,len2 = t.length,i,count = 0;
  if(!len1 ||!len2) return '';
  let map = {},res = '';
  // 用t串构建map,用于比较
  for(i=0;i<len2;i++){
    map[t[i]] = (map[t[i]] || 0) + 1;
  }
  i = 0;
  while((!(s[i] in map)) && i < len1){
    i++;
  }
  if(i === len1) return res;
  j = i;
  map[s[i]] --;
  count ++;
  while(true){
    if(count < len2){
      j ++;
      if(j === len1) break;
      if(s[j] in map){
        if(map[s[j]] > 0){
          count ++;
        }
        map[s[j]] --;
      }
    }else{
      if(!res || res.length > j - i + 1){
        res = s.slice(i,j+1);
      }
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

console.log(minWindow("a","b"))