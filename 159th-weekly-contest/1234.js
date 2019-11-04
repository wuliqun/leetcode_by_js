/**
 * 1234. 替换子串得到平衡字符串
 */

let balancedString = function (s) {
  let map = {
    Q:0,
    W:0,
    E:0,
    R:0
  };
  let len = s.length,i,count = 0;
  for(i=0;i<len;i++){
    map[s[i]] ++;
  }
  let map2 = {};
  for(i in map){
    if(map[i] > len / 4){
      map[i] -= len / 4;
      count += map[i];
      map2[i] = 0;
    }else{
      delete map[i];
    }
  }
  // 现在需要查找,最短包含map的子串
  // 滑动窗口法
  let left = 0,right = 0,min = len;
  if(count <= 1) return count; 
  while(right <= len){
    if(count === 0){
      // 当前匹配,left 右移,看能不能找到更短的
      if(right - left < min){
        min = right - left;
      }
      if(s[left] in map){
        if(map2[s[left]] === map[s[left]]){
          count ++;
        }
        map2[s[left]] --;
      }      
      left ++;
    }else{
      // 当前不匹配,right 右移,直到匹配为止
      if(s[right] in map){
        if(map2[s[right]] < map[s[right]]){
          count --;
        }
        map2[s[right]] ++;
      }
      right ++;
    }
  }
  return min;
}

console.log(balancedString('QWQR'));