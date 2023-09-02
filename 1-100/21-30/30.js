/**
 * 30. 串联所有单词的子串
 *    给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。
 *    注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。
 */

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 * 暴力法  83.50% 54.55%
 */
let findSubstring = function(s, words) {
  let res = [],count = words.length;
  if(!s || !count) return res;
  let len = words[0].length,size = count*len,i,max = s.length - size;
  let matchStr = words.sort().join('');
  let reg = new RegExp(`.{${len}}`,'g');
  for(i = 0;i<= max;i++){
    if(words.indexOf(s.substr(i,len)) !== -1){
      if(s.substr(i,size).match(reg).sort().join('') === matchStr){
        res.push(i);
      }
    }
  }
  return res;
};

/**
 * 滑动窗口法
 * 
 * 99.00% 50.00%
 */
findSubstring = function(s, words) {
  let res = [],wCount = words.length;
  if(!s || !wCount) return res;
  let len = words[0].length,sLen = s.length,map = {},i,curMap,left,right,count,tmp,tmp2;
  for(i=0;i<wCount;i++){
    map[words[i]] = (map[words[i]] || 0) + 1;
  }
  for(i = 0;i < len;i++){
    count = 0;
    left = right = i;    
    curMap = {}
    while(right + len <= sLen){
      tmp = s.substr(right,len);
      right += len;
      if(!map[tmp]){
        // 不匹配,清空当前map
        left = right;
        count = 0;
        curMap = {};
      }else{
        // 超额
        if(curMap[tmp] === map[tmp]){
          // 从左开始删,删到上一个 相同字符串为止
          while(true){
            tmp2 = s.substr(left,len);
            left += len;
            if(tmp2 === tmp){
              break;
            }else{
              curMap[tmp2] --;
              count --; 
            }
          }
        }else{ // 可以加入map中
          curMap[tmp] = (curMap[tmp] || 0) + 1;
          count ++;
        }
        // 匹配成功
        // 加入结果集,窗口向右滑动一格
        if(count === wCount){
          res.push(left);
          tmp = s.substr(left,len);
          curMap[tmp] = curMap[tmp] - 1;
          left += len;
          count --;
        }
      }
    }
  }
  return res;
};