/**
 * 
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  const len = s.length;
  const memo = {};
  let res = 0,
    i, j;
  for(i = 0;i < len;i++){
    res ++;
    for(j = len - 1;j > i;j--){
      if(isReverse(s, i, j, memo)) res ++;
    }
  }
  return res;
};

function isReverse(s, i, j, memo){
  const key = `${i}-${j}`;
  if(typeof memo[key] !== 'boolean'){
    if(i === j){
      memo[key] = true;
    }else if(j - i <= 2){
      memo[key] = s[i] === s[j];
    }else{
      memo[key] = s[i] === s[j] && isReverse(s, i + 1, j - 1, memo);
    }
  }
  return memo[key];
}







var countSubstrings = function(s) {
  const len = s.length;
  let res = 0,
    i, j, l, r;
  // 以每个点为中心扩散 中心也可以为2个点
  for(i = 0;i < len;i++){
    for(j = 0;j <= 1;j++){
      l = i;
      r = i + j;
      while(l >= 0 && r < len && s[l] === s[r]) {
        res ++;
        l--;
        r++;
      }
    }
  }
  return res;
};


console.log(countSubstrings('aaaba'));